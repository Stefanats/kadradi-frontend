import React from 'react';
import css from './styles/styles.scss';
import foto from '../images/fotosajt.png';

class GalleryButton extends React.Component{
  render(){
    return(
      <div className={css.galleryButtonWrapper}>
        <div className={css.galleryButton}> 
          <img className={css.galleryButtonImage} src={foto}/> <p>VIDI VIŠE FOTOGRAFIJA</p>
        </div>
      </div>
    )
  }
}
export default GalleryButton;
