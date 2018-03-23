import React from 'react';
import css from './styles/styles.scss';
import foto from '../images/fotosajt.png';

class RatingButton extends React.Component{
  render(){
    return(
      <div className={css.ratingButtonWrapper}>
        <div onClick={this.props.callFunction} className={css.ratingButton}> 
          <img className={css.galleryButtonImage} src={foto}/><p>VIDI VIŠE OCENA</p>
        </div>
      </div>
    )
  }
}
export default RatingButton;