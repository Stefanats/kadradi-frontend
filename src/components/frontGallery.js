import React from 'react';
import css from './styles/styles.scss';
import slika from '../images/slikaRestorana.jpeg'

class FrontGallery extends React.Component{
  render(){
    return(
      <div className={css.frontGallery}>
        <div className={css.frontGalleryWrapper}>
          <div className={css.galleryLeftBox}>
            <img src={slika}/>
          </div>
          <div className={css.galleryRightBox}>
            <div className={css.galleryRightTop}>
              <img src={slika}/>
            </div>
            <div className={css.galleryRightBottom}>
              <img src={slika}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FrontGallery;