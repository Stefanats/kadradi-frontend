import React from 'react';
import css from '../styles/styles.scss';
import GoogleMap from '../map';
import FaMailForward from 'react-icons/lib/fa/mail-forward';
import { Link } from 'react-router-dom';

class ProfileMap extends React.Component{
  render(){
    let objectCl = this.props.objectCl;
    let { coords } = this.props || [];
    let { latitude, longitude } = coords;
    let lat = objectCl.objectLocations.lat;
    let lng = objectCl.objectLocations.lng;
    return(
      <div className={css.profileMap}>
        <div className={css.profileMapWrapper}>
        {
          typeof(window) == 'undefined' ? null :
          <GoogleMap objLat={lat} objLng={lng} {...this.props} css='map1' />
        }
        </div>
        <div className={css.profileMapBar}>
          <div className={css.profileMapContent}>
            <h3>{objectCl.objectLocations.address}</h3>
            <p>{objectCl.objectLocations.city}</p>
          </div>
          {
            coords == 'null' ?
          <Link target='blank' to={`https://www.facebook.com`}>
            <div className={css.profileMapButton}>
              <div><FaMailForward/></div>
            </div>
          </Link> :
          <Link target='blank' to={`https://www.google.com/maps/dir/${latitude},${longitude}/${lat},${lng}`}> 
            <div className={css.profileMapButton}>
              <div><FaMailForward/></div>
            </div>
          </Link>
          }
        </div>
      </div>
    )
  }
}
export default ProfileMap;
