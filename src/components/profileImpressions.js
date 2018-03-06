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
import { withRouter } from 'react-router';

@graphql(gql`
  query objectCl($id: Int) {
    objectCl(id: $id){
      avgRating
      avgPrice
      ratingCount
    }
  }`,
  {
    options: (props) => {
      return ({
        variables: {
          id: parseInt
          (props.match.params.id)
        }
      })
    }
  }
)

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
    let result = this.props.data.objectCl || [];
    let [objectCl] = result;
    return(
      <div>
         { 
            objectCl == undefined ? null :
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
                    initialRating={objectCl.avgRating}
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
                  className={"icon"+" "+css.iconSize}/>}
                    fullSymbol={
                    <img 
                    width={60}
                    src={dolar}
                  className={"icon"+" "+css.iconSize}/>}
                    stop={5}
                    initialRating={4}
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
                        <p>{objectCl.avgRating}</p>
                      </div>
                    </div>
                    <div className={css.middleBorder}></div>
                  </div>
            </div>
          </div>
          <div className={css.profileImpressionsNAccuracy}>
          <div className={css.marTop} style={{display:'flex',flexDirection:'column',marginRight:'auto'}}>
            <div className={css.profileImpressionsNAccuracyImpressions}>{objectCl.ratingCount}
                <div className={css.borderOfImpressions}></div>
              </div>
              <div className={css.profileImpressionsNAccuracyAccuracy}>
                <p>99,5%</p>
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
      </div>}
      </div>
    )
  }
}
export default withRouter(ProfileImpressions);