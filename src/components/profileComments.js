import React from 'react';
import css from './styles/styles.scss';
import img from '../images/foto.png';
import Rating from 'react-rating';
import prazan from '../images/Ocena13.png';
import pun from '../images/Ocena14.png';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';

@graphql(gql`
  query ObjectReview($objectClId: Int!, $page: Int){ 
    ObjectReview(objectClId: $objectClId, page: $page) {
      rating
      person {
        firstName
        lastName
        profileInfo{
          profileImageUrl,
          stars
          photos
          followers
        }
      }
      photoCount
      textReview
      }
    }`,
  {
    options: (props) => {
      return ({
        variables: {
          objectClId: parseInt(props.match.params.id),
          page: 1
        }
      })
    }
  }
)

class ProfileComments extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 1,
    }
  }
  moreComents = () => {
    console.log('ASDSADASD')
  }
  render(){
    let result = this.props.data.ObjectReview || [];
    let [ObjectReview] = result;
    return(
      <div> { 
        ObjectReview == undefined ? null :
      <div className={css.profileComments}>
        <div className={css.userData}>
        <div className={css.userColumn} style={{display:'flex'}}>
          <div className={css.userInfo}>
            <div className={css.userPhoto}>
            <img style={{width:'inherit',borderRadius:'50%'}} src={ObjectReview.person.profileInfo.profileImageUrl}/>
            </div>
            <div className={css.userName}>
              <p className={css.userNameName}>{ObjectReview.person.firstName} {ObjectReview.person.lastName}</p>
              <div>
                <img src={img} className={css.userIcons}/>
                <span className={css.userNum}>{ObjectReview.person.profileInfo.followers}</span>
                <img src={img} className={css.userIcons}/>
                <span className={css.userNum}>{ObjectReview.person.profileInfo.stars}</span>
                <img src={img} className={css.userIcons}/>
                <span className={css.userNum}>{ObjectReview.person.profileInfo.photos}</span>
              </div>
              <div className={css.userName}>
                <p className={css.userNameName}>{item.person.firstName}</p>
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
              <span className={css.userNumPhotos}>{item.photoCount}</span>
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
                      initialRating={item.rating}
                  />
              <div className={css.circleRing+ " "+css.circleRingComments}>
                <div className={css.circleFull+ " "+css.circleRingCommentsPar}>
                  <p>{item.rating}</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className={css.userComment}>
          {ObjectReview.textReview}
          </div>
        </div>
        </div>
        </div>
        
        }
      </div>
    )
  }
}
export default withRouter(ProfileComments);