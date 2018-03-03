import React from 'react';
import css from '../styles/styles.scss';
import GoogleMap from '../map';
import FaMailForward from 'react-icons/lib/fa/mail-forward';

class ProfileMap extends React.Component{
  render(){
    let objectCl = this.props.objectCl;
    return(
      <div className={css.profileMap}>
        <div className={css.profileMapWrapper}>
          <GoogleMap
            css='map1'/>
        </div>
        <div className={css.profileMapBar}>
          <div className={css.profileMapContent}>
            <h3>{objectCl.objectLocations.address}</h3>
            <p>{objectCl.objectLocations.city}</p>
          </div>
          <div className={css.profileMapButton}>
            <div><FaMailForward/></div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProfileMap;
