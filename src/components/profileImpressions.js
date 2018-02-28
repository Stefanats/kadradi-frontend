import React from 'react';
import css from './styles/styles.scss';
import Rating from 'react-rating';
import prazan from '../images/Ocena13.png';
import pun from '../images/Ocena14.png';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import dolar from '../images/cena.png';
import { randomBytes } from 'crypto';



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
              <div className={css.profileRatingNPriceRating}>
                <Rating
                  readonly
                  emptySymbol={
                    <img style={{width:'60px',marginRight:'5px'}}
                    src={prazan}
                    className="icon"/>}
                    fullSymbol={
                    <img style={{width:'60px'}}
                    src={pun}
                    className="icon"/>}
                    stop={5}
                    initialRating={3}
                />
              </div>
              <div className={css.profileRatingNPricePrice}>
                <Rating
                  readonly
                  emptySymbol={
                    <img style={{width:'60px'}}
                    src={dolar}
                    className="icon"/>}
                    fullSymbol={
                    <img style={{width:'60px'}}
                    src={dolar}
                    className="icon"/>}
                    stop={5}
                    initialRating={3}
                />
                <p className={css.profileRatingNPriceCena}>Cena</p>
              </div>
          </div>
          <div className={css.profileRatingCircle}>
            <div>
              <div className={css.profileRatingThirth}>
                    <div style={{width:'220px',height:'220px',padding:'8px'}} className={css.circleRing}>
                      <div className={css.circleFull}>
                        <p style={{fontSize:'100px',fontWeight:'900'}}>4,5</p>
                      </div>
                    </div>
                    <div style={{display:'flex',flex:'1',width:'50%',height:'110px',borderRight:'1px solid #009797',marginTop:'15px'}}></div>
                  </div>
            </div>
          </div>
          <div className={css.profileImpressionsNAccuracy}>
            <div className={css.profileImpressionsNAccuracyImpressions}>
                378 utisaka
            </div>
            <div className={css.profileImpressionsNAccuracyAccuracy}>
                    99,5%
              <p className={css.profileRatingNPriceTacnost}>Tacnost radnog vremena</p>
            </div>
          </div> 
        </div>
        <div style={{display:'flex',borderBottom:'1px solid #009797',margin:'0px 250px'}}>
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
      </div>
    )
  }
}
export default ProfileImpressions;