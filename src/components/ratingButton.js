import React from 'react';
import css from './styles/styles.scss';
import foto from '../images/foto.png';

class RatingButton extends React.Component{
  render(){
    return(
      <div className={css.ratingButtonWrapper}>
        <div className={css.ratingButton}> 
          <img style={{marginRight:'5px'}} src={foto}/><p>VIDI VIŠE OCENA</p>
        </div>
      </div>
    )
  }
}
export default RatingButton;