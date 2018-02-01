import React from 'react';
import GoogleMapReact from 'google-map-react';
import clock from '../images/clock.png';
import css from './styles/styles.scss';

const AnyReactComponent = ({ text }) => <div><img style={{width:"50px"}} src={clock}/></div>;
// lng + 0.25 to center
class Map extends React.Component{
  static defaultProps = {
    center: {lat: 44.774707, lng: 20.60},
    zoom: 11
  };
  render(){
    return(
      <div className={css.map}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{
            key: 'AIzaSyBnrw9kCAw02vx5ElmZCrrPkgab8IOHLxM',
            language: 'en'
          }}
        >
          <AnyReactComponent
            lat={44.774707}
            lng={20.35}
            text={'Sava Bien'}
          />
        </GoogleMapReact>
    </div>
    )
  }
}
export default Map;