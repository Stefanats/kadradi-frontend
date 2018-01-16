import React from 'react';
import GoogleMapReact from 'google-map-react';
import clock from '../images/clock.png';

let niz = ['apoteke', 'meljacnice', 'kafici', 'restorani', 'banke', 'jebarnici'];

const AnyReactComponent = ({ text }) => <div><img style={{width:"50px"}} src={clock}/></div>;

class WhenWorks extends React.Component{
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };
//   render(){
//     console.log('adsa', this.props.location.pathname.substring(6))
//     if(niz.indexOf(this.props.location.pathname.substring(6)) > -1){
//       return(
//         <div>
//           <h1>{this.props.location.pathname.substring(6)}</h1>
//         </div>
//         )
//       }else{
//       return history.push('/home')
//     }
//   }
// }
  render(){
    return(
      <div >
        <div style={{height:"500px",width:"50%"}}>
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
      </div>
    )
  }
}
export default WhenWorks;