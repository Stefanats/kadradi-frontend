import React from 'react';
import css from './styles/styles.scss';
import clock24 from '../images/clock.png';
import Rating from 'react-rating';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';

let stajl = {
  display: "flex",
  height: "50vh",
  overflow: "hidden",
  position: "relative",
}
let stylez = {
  width: "100%",
  heigth: "100%",
  position: 'absolute',
  transform: "translate(-50%,-50%)",
  top: '50%',
  left: '50%',
}

@graphql(gql`
  query objectCl($id: Int){
    objectCl(id: $id){
      name
      avgRating
      ratingCount
      favorites{
        favoritesCount
      }
      checkedIn{
        checkedInCount
      }
      workingTimeInfo{
        isWorking
        monToFri {
          opening
          closing
        }
      }
      objectCategory {
        nameJ
      }
      images{
        profileImage {
          fileUrl
        }
      }
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

class ProfileHome extends React.Component{
  render(){
    let result = this.props.data.objectCl || [];
    let [objectCl] = result;
    let splitedVremeOd = objectCl != undefined ?
        objectCl.workingTimeInfo.monToFri.opening.split('') : '';
    let vremeOd = splitedVremeOd[0]+splitedVremeOd[1]+':'+splitedVremeOd[2]+splitedVremeOd[3];
    let splitedVremeDo = objectCl != undefined ?
        objectCl.workingTimeInfo.monToFri.closing.split('') : '';
    let vremeDo = splitedVremeDo[0]+splitedVremeDo[1]+':'+splitedVremeDo[2]+splitedVremeDo[3];

    return(
      <div>
        {this.props.data.loading ?
        <p style={{color:'red',fontSize:'50px'}}>loading</p> :
        <div>
          <div className={css.relative}>
            <div style={stajl}>
                <img style={stylez} src={objectCl.images.profileImage.fileUrl}/>
            </div>
            <div className={css.clockWorkTime}>
              <img src={clock24}/>
            </div>
          </div>
          <div className={css.profileTitle}>
            <div className={css.profileTitleBox}>
              <div className={css.profileTitleName}>
                <p>
                  {objectCl.name}
                </p>
              </div>
              <div className={css.profileTitleCategory}>
                <p>
                  {objectCl.objectCategory.nameJ}
                </p>
              </div>
            </div>
          </div>
          <div className={css.profileTime}>
              <div className={css.profileTimeBox}>
                <p>
                  Radno vreme {vremeOd}-{vremeDo}
                </p>
              </div>
          </div>
          <div className={css.profileInfo}>
              <div className={css.profileInfoBox}>
                <p>
                  {objectCl.ratingCount} Ocena - {objectCl.favorites.favoritesCount} Favorit - {objectCl.checkedIn.checkedInCount} je bilo ovde
                </p>
              </div>
          </div>
          <div className={css.profileRating}>
              <div className={css.profileRatingBox}>
                <div className={css.profileRatingFirst}>
                  <p>Ocena:</p>
                </div>
                <div className={css.profileRatingSecond}>
                  <div className={css.ratingBox}>
                    <Rating
                    placeholder={false}
                      stop={5}
                      initialRating={objectCl.avgRating}
                    />
                  </div>
                </div>
                <div className={css.profileRatingThirth}>
                  <div className={css.circleRing}>
                    <div className={css.circleFull}>
                      <p>{objectCl.avgRating}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>}
      </div>
    )
  }
}
export default withRouter(ProfileHome);
