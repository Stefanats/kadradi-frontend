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

@connect(state => ({ 
  filter: state.filter,
  categoriesId: state.categoriesId

}))

@graphql(gql`
 query objectCl($objectCategoryId: Int) {
  objectCl(objectCategoryId: $objectCategoryId) {
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
    }
    images {
      profileImage {
        desc
        fileUrl
      }
    }
  }
 } `,
  {
    options: (props) => {
      let trimId = props.location.pathname;
      let id = trimId.split("/").pop();

      return ({
        variables: {
          objectCategoryId: id,
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
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.data.objectCl != undefined) {
      this.setState({niz: nextProps.data.objectCl})
    }
  }
  slugify(text){
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }
  componentWillMount(){
    
  }
  render(){
    let red ={
      color: 'red'
    }
    let { filter } = this.props.filter;
    let objects = [].concat(this.state.niz);
    let orderBy = _.orderBy(objects, [filter], [filter=='name' ? 'asc' : 'desc']);
    // asc
    let nesto = orderBy
    .map((item, key) =>
        <div className={css.objectCardItem} key={key}>

          <div className={css.objectImg} >
            <img alt={item.name} src={item.images.profileImage.fileUrl} />
          </div>

          <div className={css.objectInfoWrapper} >
          
            <div className={css.objectName} >
              <div className={css.ratingNumber}>
                <p>1</p>
              </div>
              <Link to={`/profile/${this.slugify(item.name)}/${item.id}`}>
                <p>{item.name}</p>
              </Link>
            </div>

            <div className={css.objectRating}>
              <Rating
                readonly
                emptySymbol={
                  <img style={{width:'30px', marginRight:'2px'}}
                src={prazan}
                className="icon"/>}
                fullSymbol={
                  <img style={{width:'30px', marginRight:'2px'}}
                src={pun}
                className="icon"/>}
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
                    style={{width:'100px',margin:'auto 0 0 auto'}}
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
        {nesto}
      </div>
    )
  }
}
export default withRouter(ObjectCard);
