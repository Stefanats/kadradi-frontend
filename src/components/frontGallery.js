import React from 'react';
import css from './styles/styles.scss';
import DownloadModal from './downloadModal';

class FrontGallery extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalDisplay: false,
    }
  }
  modalDisplay() {
    this.setState({
      modalDisplay: true,
    })
  }
  render(){
    return(
      <div className={css.frontGallery}>
        <DownloadModal 
          comment='komentara'
          display={this.state.modalDisplay}/>
        <div className={css.frontGalleryWrapper}>
          <div className={css.galleryLeftBox}>
            <div
              onClick={() => this.modalDisplay()}
              className={css.imagesHover}>
              <p>Sve slike</p>
            </div>
          </div>
          <div className={css.galleryRightBox}>
            <div className={css.galleryRightTop}>
              <div
                onClick={() => this.modalDisplay()} 
                className={css.imagesHover}>
                <p>Slike korisnika</p>
              </div>
            </div>
            <div className={css.galleryRightBottom}>
              <div
                onClick={() => this.modalDisplay()} 
                className={css.imagesHover}>
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