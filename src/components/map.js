import React from 'react';
import GoogleMapReact from 'google-map-react';
import clock from '../images/clock.png';
import css from './styles/styles.scss';

const AnyReactComponent = ({ text }) => <div><img style={{width:"50px"}} src={clock}/></div>;

class Map extends React.Component{
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
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
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
    </div>
    )
  }
}
export default Map;