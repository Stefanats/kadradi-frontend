import React from 'react';
import css from './styles/styles.scss';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import img from '../images/okvir.png';
import yel from '../images/pun.png';
import _ from 'lodash';
import { connect } from 'react-redux';
import pun from '../images/Ocena14.png';
import prazan from '../images/Ocena13.png';
import satNeRadi from '../images/Sat-ne-radi.png';
import satRadi from '../images/Sat-radi.png';
import satNeRadiVip from '../images/Sat-ne-radi-placeno.png';
import satRadiVip from '../images/Sat-radi-placeno.png';
import SelectFiltration from './selectFiltration';
import { BarLoader } from 'react-spinners';

@connect(state => ({ 
  filter: state.filter,
  categoriesId: state.categoriesId,
  closeToMe: state.closeToMe,
  arrayCount: state.arrayCount,
}))

@graphql(gql`
 query objectCll(
    $lng: Float,
    $lat: Float,
    $distance: Float,
    $objectCategoryId: Int,
    $alphabetical: Boolean,
    $price: Int,
    $byRating: Boolean) {
  objectCl(
    objectCategoryId: $objectCategoryId,
    alphabetical: $alphabetical
    price: $price,
    byRating: $byRating) {
    id
    verified
    name
    ratingCount
    avgRating
    workingTimeInfo{
      isWorking
    }
    objectLocations {
      city
    }
    objectCategory {
      nameJ
      name
    }
    images {
      profileImage {
        desc
        fileUrl
      }
    }
  }
  nearestObjects(categoryId: $objectCategoryId, lat: $lat, lng: $lng, distance: $distance){
    name
    avgRating
    ratingCount
    verified
    objectCategory{
      id
      nameJ
    }
    objectLocations{
      address
      lat
      lng
    }
    images{
      profileImage {
        fileUrl
      }
    }
    workingTimeInfo{
      isWorking
    }
  }
 } `,
  {
    options: (props) => {
      let trimId = props.location.pathname;
      let id = trimId.split("/").pop();

      let {latitude, longitude} = props.coords || 0;

      return ({
        variables: {
          lng: longitude,
          lat: latitude,
          distance: 3,
          objectCategoryId: id,
          alphabetical: false,
          price: 0,
          byRating: false,
        }
      })
    },
  }
)


class ObjectCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      niz: [],
      niz2: [],
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.data.objectCl != undefined) {
      this.setState({niz: nextProps.data.objectCl});
    }
    if(nextProps.data.nearestObjects != undefined) {
      this.setState({niz2: nextProps.data.nearestObjects})
    }
    if(nextProps.data.objectCl !== this.props.data.objectCl){
      this.props.dispatch({
        type: "ARRAY_COUNT",
        value: this.state.niz.length,
      });
    }
    this.props.filter.filter !== nextProps.filter.filter ?
    this.sort(nextProps.filter.filter) : null
  }
  //063 202 586-nikola
  slugify(text){
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }
  sort = async (filter) => {
    filter === 'alphabetical' ?
    await this.props.data.refetch({
      alphabetical: true,
    }) :
    filter === 'priceUp' ?
    await this.props.data.refetch({
      price: 1,
    }) :
    filter === 'priceDown' ?
    await this.props.data.refetch({
      price: 2,
    }) :
    filter === 'ratingCount' ?
    await this.props.data.refetch({
      byRating: true,
    }) : null
  }
  render(){
    let result = this.props.closeToMe.close ? this.state.niz2 : this.state.niz;
    let sortedResult = _.sortBy( result, 'avgRating' ).reverse();

    let objects = result
    .map((item, key) =>
        <div className={css.objectCardItem} key={key}>
          <div className={css.objectImg} >
            <img alt={item.name} src={item.images.profileImage.fileUrl} />
          </div>
          <div className={css.objectInfoWrapper} >
            <div className={css.objectName} >
              <div className={css.ratingNumber}>
                <p>{sortedResult.indexOf(item)+1}</p>
              </div>
              <Link to={`/profile/${this.slugify(item.name)}/${item.id}`}>
                <p>{item.name}</p>
              </Link>
            </div>
            <div className={css.objectRating}>
              <Rating
                readonly
                emptySymbol={
                  <img
                    src={prazan}
                    className={"icon"+" "+css.objectCardRating}/>}
                fullSymbol={
                  <img
                  src={pun}
                  className={"icon"+" "+css.objectCardRating}/>}
                  stop={5}
                  initialRating={item.avgRating}
              />
              <div className={css.circleRating}>
                <div>
                  <p>{item.avgRating}</p>
                </div>
              </div>
              <div className={css.ratingCount}>
                <p>{item.ratingCount} Reviews</p>
              </div>
            </div>
            <div className={css.isWorkingWrapper}>
              <div className={css.objectInfo}>
                <p>
                  {item.objectCategory.nameJ}, {item.objectLocations.city}
                </p>
              </div>
              <div className={css.isWorking}>
                {
                  <img 
                    className={css.objectCardClock}
                    alt='clock image'
                    src={
                  item.workingTimeInfo.isWorking && item.verified ? satRadiVip :
                  !item.workingTimeInfo.isWorking && item.verified ? satRadi :
                  item.workingTimeInfo.isWorking && !item.verified ? satNeRadiVip : satNeRadi}/>
                }
              </div>
            </div>
          </div>
        </div>
    )
    return(
      <div className={css.objectCard}>
        { 
          this.props.data.loading ? 
          <div style={{height:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
            <BarLoader color='#019f9f'/>
          </div> :
          objects
        }
        <div className={css.objectEmptyDiv}>
        </div>
      </div>
    )
  }
}
export default withRouter(ObjectCard);
