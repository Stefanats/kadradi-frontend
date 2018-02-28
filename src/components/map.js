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
import { read } from 'fs';
import pun from '../images/Ocena14.png';
import prazan from '../images/Ocena13.png';
import pola from '../images/Ocena15.png';
import Rating from 'react-rating';

@graphql(gql`
 query
  nearestObjects($categoryId: Int, $lat: Float, $lng: Float, $distance: Float) {
    nearestObjects(categoryId: $categoryId, lat: $lat, lng: $lng, distance: $distance){
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

      return ({
        variables: {
          lat: 44.78,
          lng: 20.37,
          distance: 100,
          categoryId: id,
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

  render() {
    let {latitude, longitude} = this.props.coords || [];
    console.log('stefan', this.props.coords);
    let id = this.props.location.pathname.split("/").pop();
    let csss = this.props.css == 'map' ? css.map : css.map1;
    let result = this.props.data.nearestObjects || [];
      return (
        <div className={csss}>
        { latitude == null || longitude == null ? <div>LOUDUJE SE</div> :
        <Map
          onClick={() => this.onMapClicked()}
          google={this.props.google}
          zoom={12}
          initialCenter={{
            lat: latitude,
            lng: longitude,
          }}>
          {
            this.props.css != 'map' ? null :
            result.map((item, key) => {
              return(
            <Marker
              key={key}
              icon={
                item.workingTimeInfo.isWorking && item.verified ? satRadiVip :
                !item.workingTimeInfo.isWorking && item.verified ? satRadi :
                item.workingTimeInfo.isWorking && !item.verified ? satNeRadiVip : satNeRadi
              }
              onClick={(event, marker) => this.onMarkerClick(event, marker)}
              name={item.name}
              title={'sadasd'}
              ratingCount={item.ratingCount}
              avgRating={item.avgRating}
              img={item.images.profileImage.fileUrl}
              objectName={item.objectCategory.nameJ}
              objectLocations={item.objectLocations.adress}
              position={{
                lat: item.objectLocations.lat,
                lng: item.objectLocations.lng}}/>)
          })}
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
    apiKey: ('AIzaSyBnrw9kCAw02vx5ElmZCrrPkgab8IOHLxM')
  })(GoogleMap))


  

// class Map extends React.Component{
//   static defaultProps = {
//     center: {lat: 44.774707, lng: 20.60},
//     zoom: 11
//   };
//   render(){
//     console.log('IZ REDUXAAAAAAAAAAAAA', this.props.lat)
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