import React from 'react';
import css from './styles/styles.scss';
import img from '../images/foto.png';
import Rating from 'react-rating';
import prazan from '../images/Ocena13.png';
import pun from '../images/Ocena14.png';

class ProfileComments extends React.Component{
  render(){
    return(
      <div className={css.profileComments}>
        <div className={css.userData}>
        <div className={css.userColumn} style={{display:'flex'}}>
          <div className={css.userInfo}>
            <div className={css.userPhoto}>
            </div>
            <div className={css.userName}>
              <p className={css.userNameName}>Jelena Boskovic</p>
              <div>
                <img src={img} className={css.userIcons}/>
                <span className={css.userNum}>13</span>
                <img src={img} className={css.userIcons}/>
                <span className={css.userNum}>122</span>
                <img src={img} className={css.userIcons}/>
                <span className={css.userNum}>19</span>
              </div>
            </div>
          </div>
          <div className={css.userRating}>
          <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginLeft:'auto'}}>
            <img src={img} className={css.userRatings}/>
            <span className={css.userNumPhotos}>2</span>
            <Rating
                  readonly
                  emptySymbol={
                    <img 
                    src={prazan}
                    className={"icon"+ " "+css.circlesUserComments}/>}
                    fullSymbol={
                    <img
                    src={pun}
                    className={"icon"+ " "+css.circlesUserComments}/>}
                    stop={5}
                    initialRating={3}
                />
            <div className={css.circleRing+ " "+css.circleRingComments}>
              <div className={css.circleFull+ " "+css.circleRingCommentsPar}>
                <p>5</p>
              </div>
            </div>
            </div>
          </div>
        </div>
          <div className={css.userComment}>
          Lorem Ipsum is simply dummy text of the printing an typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc...
          </div>
        </div>
        
      </div>
    )
  }
}
export default ProfileComments;