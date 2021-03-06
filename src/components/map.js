import React from 'react';
import satNeRadi from '../images/Sat-ne-radi1.png';
import satRadi from '../images/Sat-radi1.png';
import satNeRadiVip from '../images/Sat-ne-radi-placeno1.png';
import satRadiVip from '../images/Sat-radi-placeno1.png';
import css from './styles/styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import pun from '../images/Ocena14.png';
import prazan from '../images/Ocena13.png';
import pola from '../images/Ocena15.png';
import Rating from 'react-rating';
import {geolocated} from 'react-geolocated';
import { BarLoader } from 'react-spinners';
import { EDESTADDRREQ } from 'constants';

@connect(state => 
  ({
    closeToMe: state.closeToMe,
    countiesName: state.counties
  }))

@graphql(gql`
 query
  nearestObjects($categoryId: Int, $lat: Float, $lng: Float, $distance: Float, $locationId: Int) {
    objectCl(locationId: $locationId, objectCategoryId: $categoryId){
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
    nearestObjects(categoryId: $categoryId, lat: $lat, lng: $lng, distance: $distance){
      name
      isWorking
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
      let distance = props.closeToMe.blizuMene ? 5 : 20;
      let {latitude, longitude} = props.coords || 0;
      let countiesId = props.countiesName.id;

      return ({
        variables: {
          lat: latitude,
          lng: longitude,
          distance: distance,
          categoryId: id,
          locationId: countiesId,
        }
      })
    },
  }
)

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      marker: {},
      name: '',
      img: '',
      ratingCount: null,
      avgRating: null,
      objectName: '',
      objectLocations: '',
      niz: [],
      objectCl: [],
    }}

  onMarkerClick(event, marker) {
    this.setState({
      showingInfoWindow: true,
      marker: marker,
      lat: event.position.lat,
      lng: event.position.lng,
      name: event.name,
      img: event.img,
      avgRating: event.avgRating,
      ratingCount: event.ratingCount,
      objectName: event.objectName,
      objectLocations: event.objectLocations
    });
  }
  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.data.nearestObjects !== undefined) {
      this.setState({niz: nextProps.data.nearestObjects})
    }
    if(nextProps.data.objectCl !== undefined) {
      this.setState({objectCl: nextProps.data.objectCl})
    }
  }
  render() {
    console.log('LAAAAAAAAAAAAA', this.state.objectCl)
    let {latitude, longitude} = this.props.coords || [];
    let id = this.props.location.pathname.split("/").pop();
    let csss = this.props.css === 'map1' ? css.map1 : css.map;



    let resultNear = this.state.niz;

    let resultWork = resultNear.filter(item => item.isWorking === 'true');


    let nearObj = !this.props.closeToMe.radiSada ? resultNear : resultWork;

    let result = this.props.countiesName.id === 1 ? nearObj : this.state.objectCl;

      return (
        <div className={csss}>
        { 
          longitude == undefined || latitude == undefined ?
          <div style={{height:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
              <BarLoader color='#019f9f'/>
          </div> :
        <Map
          onClick={() => this.onMapClicked()}
          google={this.props.google}
          zoom={12}
          initialCenter={{
            lat: this.props.css === 'map1' ? this.props.objLat : latitude,
            lng: this.props.css === 'map1' ? this.props.objLng : longitude, 
          }}>
          {
            this.props.css != 'map' ? null :
            result.map((item, key) => {
              return(
            <Marker
              key={key}
              icon={
                item.workingTimeInfo.isWorking && item.verified ? satRadiVip :
                !item.workingTimeInfo.isWorking && item.verified ? satNeRadiVip :
                item.workingTimeInfo.isWorking && !item.verified ? satRadi : satNeRadi
              }
              onClick={(event, marker) => this.onMarkerClick(event, marker)}
              name={item.name}
              title={item.name}
              ratingCount={item.ratingCount}
              avgRating={item.avgRating}
              img={item.images.profileImage.fileUrl}
              objectName={item.objectCategory.nameJ}
              objectLocations={item.objectLocations.adress}
              position={{
                lat: item.objectLocations.lat,
                lng: item.objectLocations.lng}}/>)
          })}
            <Marker
              icon={satNeRadi}
              position={{
                lat: this.props.css === 'map1' ? this.props.objLat : latitude,
                lng: this.props.css === 'map1' ? this.props.objLng : longitude, 
                }}/>
              <InfoWindow
              marker={this.state.marker}
              style={{marginBottom:'20px'}}
              visible={this.state.showingInfoWindow}>
                <div>
                  <div>
                    <img src={this.state.img} className={css.infoWindowImg}/>
                  </div>
                  <div className={css.infoWindowName}>
                    
                    <p>{this.state.name}</p>
                  </div>
                  <div className={css.infoWindowRating}>
                    <Rating
                    readonly
                    emptySymbol={
                      <img style={{width:'20px'}}
                      src={prazan}
                      className="icon"/>}
                    fullSymbol={
                      <img style={{width:'20px'}}
                      src={pun}
                      className="icon"/>}
                    stop={5}
                    initialRating={this.state.avgRating}
                    /> 
                    <div className={css.infoWindowAvgRating}>
                      <div>
                        <p>{this.state.avgRating}</p>
                      </div>
                    </div>
                    <div style={{display:'flex', alignItems:'center', marginLeft:'5px'}}>
                      <p>{this.state.ratingCount} Reviews</p>
                    </div>
                  </div>
                  <p style={{marginBottom:'3px'}}>{this.state.objectName},</p>
                  <p>{this.state.objectLocations}</p>
                </div>
              </InfoWindow>
        </Map>}
          </div>
      );
    }
  }

  export default  withRouter(GoogleApiWrapper({
    apiKey: ('AIzaSyB78XZlt3Zi8SX1mMJy81qDqfhfQPqMw_g')
  })(GoogleMap))


  









// class Map extends React.Component{
//   static defaultProps = {
//     center: {lat: 44.774707, lng: 20.60},
//     zoom: 11
//   };
//   render(){
//     let csss = this.props.css == 'map' ? css.map : css.map1
//     return(
//       <div className={csss}>
//         <GoogleMapReact
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//           bootstrapURLKeys={{
//             key: 'AIzaSyBnrw9kCAw02vx5ElmZCrrPkgab8IOHLxM',
//             language: 'en'
//           }}
//         >         
//          <AnyReactComponent
//         lat={this.props.lat}
//         lng={this.props.lng}
//         text={'proba'}
//       />
//         </GoogleMapReact>
//     </div>
//     )
//   }
// }
// export default Map;