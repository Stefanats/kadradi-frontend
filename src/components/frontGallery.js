import React from 'react';
import css from './styles/styles.scss';

class FrontGallery extends React.Component{
  render(){
    return(
      <div className={css.frontGallery}>
        <div className={css.frontGalleryWrapper}>
          <div className={css.galleryLeftBox}>
            <div className={css.imagesHover}>
              <p>Sve slike</p>
            </div>
          </div>
          <div className={css.galleryRightBox}>
            <div className={css.galleryRightTop}>
              <div className={css.imagesHover}>
                <p>Slike korisnika</p>
              </div>
            </div>
            <div className={css.galleryRightBottom}>
              <div className={css.imagesHover}>
                <p>Slike objekta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FrontGallery;