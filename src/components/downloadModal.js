import React from 'react';
import css from './styles/styles.scss';
import { Link } from 'react-router-dom';
import appStore from '../images/app_store.png';
import googlePlay from '../images/google_play.png';
import { connect } from 'react-redux';

@connect(state => ({ modal: state.modal }))

class DownloadModal extends React.Component{
  closeModal = () => {
    this.props.dispatch({
      type: "MODAL_DISPLAY",
      value: false,
    });
  }
  render(){
    let display = this.props.modal.display;
    return(
      <div
        onClick={() => this.closeModal()}
        style={{display:`${display ? 'flex' : 'none'}`}}
        className={css.downloadModal}>
        <div 
          onClick={(e) => this.clickHandler(e)}
          className={css.downloadModalWrapper}>
          <div className={css.downloadModalHolder}>
            <p>Skinite aplikaciju i otključajte</p>
            <p>mnoštvo mogućnosti</p>
            <p>koje Vam pruža Kad Radi!</p>
          </div>
          <div style={{alignItems:'center', display:'flex', flexDirection:'column',justifyContent:'center'}}>
            <a style={{marginBottom:'10px'}} href='https://itunes.apple.com/us/app/facebook/id284882215?mt=8'>
              <img width={150} src={appStore} alt="app store"/>
            </a>
            <a href='https://play.google.com/store/search?q=facebook&hl=sr'>
              <img width={150} src={googlePlay} alt="google play"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default DownloadModal;