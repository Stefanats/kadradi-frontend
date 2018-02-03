import React from 'react';
import css from './styles/styles.scss';
import WhenWorksHeader from './whenWorksHeader';
import ProfileHome from './profileHome';
import ProfileWorkTime from './profileWorkTime';
import ProfileGallery from './profileGallery';
import ProfileImpressions from './profileImpressions';

class ObjectProfile extends React.Component{
  render(){
    console.log('props', this.props)
    return(
      <div>
        
        <WhenWorksHeader />
        <ProfileHome />
        <ProfileWorkTime />
        <ProfileGallery />
        <ProfileImpressions />
      </div>
    )
  }
}
export default ObjectProfile;