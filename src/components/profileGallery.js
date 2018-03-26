import React from 'react';
import css from './styles/styles.scss';
import FrontGallery from './frontGallery';
import GalleryButton from './galleryButton';

class ProfileGalerry extends React.Component{
  render(){
    return(
      <div className={css.profileGallery + " " + css.objectProfileStyle}>
          <div className={css.galleryHeader}>
            <div className={css.galleryHeaderWrapper}>
              <h3>Galerija</h3>
            </div>
          </div>
          <div className={css.galleryBody}>
            <FrontGallery />
            {/* <GalleryButton /> */}
          </div>
      </div>
    )
  }
}
export default ProfileGalerry;
