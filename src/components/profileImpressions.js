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
import { withRouter } from 'react-router';
import Loading from 'react-loading-components';

@graphql(gql`
  query objectCl($id: Int) {
    objectCl(id: $id) {
      avgPrice
      avgRating
      ratingCount
    }
  }`,
  {
    options: (props) => {
      return ({
        variables: {
          id: parseInt(props.match.params.id),
        }
      })
    },
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
    // from num to string
    let avgRating = 4.2; // ovde ide objectCl.avgRating
    avgRating = avgRating.toString();
    avgRating = avgRating.replace(".",",");
    return(
    <div>
      {
        this.props.data.loading ? <Loading /> :
        objectCl === undefined ? null :
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
                    initialRating={objectCl.avgPrice}
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
                        <p>{avgRating}</p>
                      </div>
                    </div>
                    <div className={css.middleBorder}></div>
                  </div>
            </div>
          </div>
          <div className={css.profileImpressionsNAccuracy}>
            <div className={css.marTop} style={{display:'flex',flexDirection:'column',marginRight:'auto'}}>
              <div className={css.profileImpressionsNAccuracyImpressions}>
                <p>Utisaka: {objectCl.ratingCount}</p>
                <div className={css.borderOfImpressions}></div>
              </div>
              <div className={css.profileImpressionsNAccuracyAccuracy}>
                <p>99,5%</p>
                <p className={css.profileRatingNPriceTacnost}>Tačnost radnog vremena</p>
              </div>
            </div> 
          </div>
        </div>
        <div className={css.borderDown}>
        </div>
        <div style={{display:`${this.state.memory}`,flexDirection:'column'}}>
        <div style={{display:'flex'}} className={css.memory}>
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
        <div className={css.borderOfMemory}></div>
        </div>
          <ProfileComments />
      </div>}
      
      }
      </div>
    )
  }
}
export default withRouter(ProfileImpressions);