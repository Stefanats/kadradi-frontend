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
  countiesName: state.counties,
}))

@graphql(gql`
  query objectCll(
    $lng: Float,
    $lat: Float,
    $distance: Float,
    $objectCategoryId: Int,
    $locationId: Int,
  ) {
  objectCl(locationId: $locationId){
    id
    isWorking
    name
    avgRating
    ratingCount
    avgPrice
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
  nearestObjects(
    categoryId: $objectCategoryId,
    lat: $lat,
    lng: $lng,
    distance: $distance,
  ) {
    id
    isWorking
    name
    avgRating
    ratingCount
    avgPrice
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
      let distance = props.closeToMe.blizuMene ? 5 : 20;
      
      return ({
        variables: {
          lng: longitude,
          lat: latitude,
          distance: distance,
          objectCategoryId: id,
          locationId: 1,
        }
      })
    },
  }
)


class ObjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      niz: [],
      countiesId: 0,
      countiesArr: [],
    }
  }
  componentWillUnmount() {
    this.props.dispatch({
      type: "ARRAY_COUNT",
      value: 0,
    });
    this.props.dispatch({
      type: "CLOSE_TOME",
      blizuMene: true,
      radiSada: false,
    });
    this.setState({
      countiesId: 0,
    })
  }
  locationFunction = async (e) => {
    await this.props.data.refetch({
      locationId: e.countiesName.id,
    })
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.data.nearestObjects !== undefined) {
      console.log('nextProps', nextProps.data.nearestObjects.length)
    } else {
      console.log('UNDEEEEEEEEEFIIIIIIIIIIINEEEEEEEED')
    }
    // if(nextProps.data) {
    //   this.setState({
    //     countiesArr: nextProps.data.objectCl,
    //     countiesId: nextProps.countiesName.id,
    //   })
    //   console.log('this/', nextProps.data.objectCl)
    //   if(nextProps.countiesName !== this.props.countiesName) {
    //     this.locationFunction(nextProps);
    //   }
    //   if(!nextProps.closeToMe.radiSada) {
    //     if(nextProps.data.nearestObjects) {
    //       this.setState({niz: nextProps.data.nearestObjects})
    //       if(nextProps !== this.props){
    //         this.props.dispatch({
    //           type: "ARRAY_COUNT",
    //           value: nextProps.data.nearestObjects.length,
    //       });
    //     }
    //   }
    //   }else{
    //     if(nextProps !== this.props){
    //       let nearestObjectsRadi = 
    //       nextProps.data.nearestObjects.filter(item => item.isWorking === 'true');
    //       this.setState({niz: nearestObjectsRadi})
    //       this.props.dispatch({
    //         type: "ARRAY_COUNT",
    //         value: nearestObjectsRadi.length,
    //       });
    //     }
    //   }
    // }
  }
  slugify(text){
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }
  render(){
    // let { data } = this.props || [];
    // let { objectCl } = data || [];
    // let { nearestObjects } = data || [];


    let { latitude, longitude } = this.props.coords || [];
    let poCemu = this.props.filter.kako;
    // MAKING ARRAY WITH WORKING OBJECTS
    // let nearestObjectsRadi = 
    // nearestObjects == undefined ? [] :
    // nearestObjects.filter(item => item.isWorking === 'true');
    // WORKING OBJECTS OR ALL OBJECTS
    // let daLiRadi = !this.props.closeToMe.radiSada ?
    // nearestObjects : nearestObjectsRadi;
    // COUNTIES OR NEAREST OBJECTS
    // let finalArr = this.state.countiesId > 1 ?
    // this.state.countiesArr : daLiRadi;

    // FILTRATING FINAL ARRAY
    // let ordered = _.orderBy(finalArr,[this.props.filter.filter], [poCemu])
    // MAPPING FINAL ARRAY

    // console.log('obbbbbbbbb', ordered)
    // let objects = ordered
    // .map((item, key) =>
    //     <div className={css.objectCardItem} key={key}>
    //       <div className={css.objectImg} >
    //         <img alt={item.name} src={item.images.profileImage.fileUrl} />
    //       </div>
    //       <div className={css.objectInfoWrapper} >
    //         <div className={css.objectName} >
    //           <div className={css.ratingNumber}>
    //             <p>{ordered.indexOf(item)+1}</p>
    //           </div>
    //           <Link to={`/profile/${this.slugify(item.name)}/${item.id}`}>
    //             <p>{item.name}</p>
    //           </Link>
    //         </div>
    //         <div className={css.objectRating}>
    //           <Rating
    //             readonly
    //             emptySymbol={
    //               <img
    //                 src={prazan}
    //                 className={"icon"+" "+css.objectCardRating}/>}
    //             fullSymbol={
    //               <img
    //               src={pun}
    //               className={"icon"+" "+css.objectCardRating}/>}
    //               stop={5}
    //               initialRating={item.avgRating}
    //           />
    //           <div className={css.ratingNewRow}>
    //           <div className={css.circleRating}>
    //             <div>
    //               <p>{item.avgRating}</p>
    //             </div>
    //           </div>
    //           <div className={css.ratingCount}>
    //             <p>{item.ratingCount} Reviews</p>
    //           </div>
    //           </div>
    //         </div>
    //         <div className={css.isWorkingWrapper}>
    //           <div className={css.objectInfo}>
    //             <p>
    //               {item.objectCategory.nameJ}, {item.objectLocations.city}
    //             </p>
    //           </div>
    //           <div className={css.isWorking}>
    //             {
    //               <img 
    //                 className={css.objectCardClock}
    //                 alt='clock image'
    //                 src={
    //               item.workingTimeInfo.isWorking && item.verified ? satRadiVip :
    //               !item.workingTimeInfo.isWorking && item.verified ? satNeRadiVip :
    //               item.workingTimeInfo.isWorking && !item.verified ? satRadi : satNeRadi}/>
    //             }
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // )
    return(
      <div className={css.objectCard}>
        { 
          // this.props.data.loading ? 
          // <div style={{height:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
          //   <BarLoader color='#019f9f'/>
          // </div> :
          // objects
        }
        <div className={css.objectEmptyDiv}>
        </div>
      </div>
    )
  }
}
export default withRouter(ObjectCard);
