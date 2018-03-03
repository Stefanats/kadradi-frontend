import React from 'react';
import css from './styles/styles.scss';
import WhenWorksHeader from './whenWorksHeader';
import ProfileHome from './profileHome';
import ProfileWorkTime from './profileWorkTime';
import ProfileGallery from './profileGallery';
import ProfileImpressions from './profileImpressions';
import ProfileComments from './profileComments';
import RatingButton from './ratingButton';

class ObjectProfile extends React.Component{
  render(){
    return(
      <div>
          {/* <WhenWorksHeader /> */}
          <ProfileHome/>
          <ProfileWorkTime/>
          <ProfileGallery />
          <ProfileImpressions /> 
          <ProfileComments />
          <RatingButton />
      </div>
    )
  }
}
export default ObjectProfile;