import React from 'react';
import css from './styles/styles.scss';
import Rating from 'react-rating';
import prazan from '../images/Ocena13.png';
import pun from '../images/Ocena14.png';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import dolar from '../images/cena.png';
import { randomBytes } from 'crypto';
import ProfileComments from './profileComments';
import RatingButton from './ratingButton';

class ProfileImpressions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      memory: 'flex'
    }
  }
  onClickHandle = () => {
    this.setState({
      memory: 'none'
    })
  }
  render(){
  
    return(
      <div style={{display:'flex',flex:'1',flexDirection:'column'}}>
        <div className={css.profileImpressionsFirst}>
          <div className={css.profileImpressionsFirstBox}>
            <p>Ocene i utisci</p>
          </div>
        </div>
        <div style={{display:'flex'}}>
          <div className={css.profileRatingNPrice}>
            <div className={css.marTop} style={{display:'flex',flexDirection:'column',marginLeft:'auto',alignItems:'centar'}}>
              <div className={css.paddingOfRating}>
                <Rating
                  readonly
                  emptySymbol={
                    <img   
                    src={prazan}
                    className={"icon"+ " "+css.biggerIconSize}/>}
                    fullSymbol={
                    <img 
                    src={pun}
                    className={"icon"+ " "+css.biggerIconSize}/>}
                    stop={5}
                    initialRating={3}
                />
                <div className={css.borderOfRatings}></div>
              </div>
              <div className={css.profileRatingNPricePrice}>
                <Rating
                  readonly
                  emptySymbol={
                    <img
                    width={60}
                    src={dolar}
                  className={"icon"+ " "+css.iconSize}/>}
                    fullSymbol={
                    <img 
                    width={60}
                    src={dolar}
                  className={"icon"+ " "+css.iconSize}/>}
                    stop={5}
                    initialRating={3}
                />
                <p className={css.profileRatingNPriceCena}>Cena</p>
              </div>
            </div>
          </div>
          <div className={css.profileRatingCircle}>
            <div>
              <div className={css.profileRatingThirth}>
                    <div className={css.circleRing + " " + css.bigCircle}>
                      <div className={css.circleFull + " " + css.bigCircleParagraph}>
                        <p>4,5</p>
                      </div>
                    </div>
                    <div className={css.middleBorder}></div>
                  </div>
            </div>
          </div>
          <div className={css.profileImpressionsNAccuracy}>
          <div className={css.marTop} style={{display:'flex',flexDirection:'column',marginRight:'auto'}}>
            <div className={css.profileImpressionsNAccuracyImpressions}>378 utisaka
                <div className={css.borderOfImpressions}></div>
            </div>
            <div className={css.profileImpressionsNAccuracyAccuracy}>
                    99,5%
              <p className={css.profileRatingNPriceTacnost}>Tacnost radnog vremena</p>
            </div>
          </div> 
          </div>
        </div>
        <div className={css.borderDown}>
        </div>
        <div style={{display:`${this.state.memory}`}} className={css.memory}>
                <div className={css.znak}>
                ?
                </div>
                <div className={css.zapamtite}>
                Zapamtite restorani ne mogu lažirati ocenu ili je platiti.
                </div>
                <div onClick={() => this.onClickHandle()} className={css.xxx}>
                x
                </div>
          </div>
          <ProfileComments />
          <RatingButton />
      </div>
    )
  }
}
export default ProfileImpressions;