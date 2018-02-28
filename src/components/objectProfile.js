import React from 'react';
import css from './styles/styles.scss';
import WhenWorksHeader from './whenWorksHeader';
import ProfileHome from './profileHome';
import ProfileWorkTime from './profileWorkTime';
import ProfileGallery from './profileGallery';
import ProfileImpressions from './profileImpressions';

class ObjectProfile extends React.Component{
  render(){
    return(
      <div>
          {/* <WhenWorksHeader /> */}
          <ProfileHome/>
          <ProfileWorkTime/>
<<<<<<< HEAD
          {/* <ProfileGallery /> */}
=======
          <ProfileGallery />
>>>>>>> master
          <ProfileImpressions /> 
      </div>
    )
  }
}
export default ObjectProfile;