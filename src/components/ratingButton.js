import React from 'react';
import css from './styles/styles.scss';
import foto from '../images/fotosajt.png';
import { connect } from 'react-redux';

@connect(state => ({ modal: state.modal }))

class RatingButton extends React.Component{
  sendToRedux = () => {
    this.props.dispatch({
      type: "MODAL_DISPLAY",
      value: true,
    });
  }
  render(){
    return(
      <div className={css.ratingButtonWrapper}>
        <div onClick={() => this.sendToRedux()} className={css.ratingButton}> 
          <img className={css.galleryButtonImage} src={foto}/><p>VIDI VIŠE OCENA</p>
        </div>
      </div>
    )
  }
}
export default RatingButton;