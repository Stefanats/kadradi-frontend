import React from 'react';
import css from '../styles/styles.scss';
import Map from '../map';
import FaMailForward from 'react-icons/lib/fa/mail-forward';

class ProfileMap extends React.Component{
  render(){
    return(
      <div className={css.profileMap}>
        <div className={css.profileMapWrapper}>
          <Map
            css='map1'/>
        </div>
        <div className={css.profileMapBar}>
          <div className={css.profileMapContent}>
            <h3>Ulica Strahinjica Bana 78</h3>
            <p>Beograd</p>
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
