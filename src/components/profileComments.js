import React from 'react';
import css from './styles/styles.scss';
import img from '../images/foto.png';
import Rating from 'react-rating';
import prazan from '../images/Ocena13.png';
import pun from '../images/Ocena14.png';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import RatingButton from './ratingButton';

@graphql(gql`
  query ObjectReview($objectClId: Int!, $page: Int) {
    ObjectReview(objectClId: $objectClId, page: $page) {
      maxPages
      rating
      textReview
      photoCount
      person{
        firstName
        lastName
        profileInfo{
          profileImageUrl
          stars
          photos
          followers
        }
      }
    }
  }`,
  {
    options: (props) => {
      return ({
        variables: {
          objectClId: parseInt(props.match.params.id),
          page: 1,
        }
      })
    },
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
    console.log('STEJT', this.state.page)
    let result = this.props.data.ObjectReview || [];
    let ObjectReview = result;
    let comments = ObjectReview.map((item, key) => {
      return(
        <div key={key} className={css.userData}>
          <div className={css.userColumn} style={{display:'flex'}}>
            <div className={css.userInfo}>
              <div className={css.userPhoto}>
                <img style={{width:'inherit'}} src={item.person.profileInfo.profileImageUrl} />
              </div>
              <div className={css.userName}>
                <p className={css.userNameName}>{item.person.firstName}</p>
                <div>
                  <img src={img} className={css.userIcons}/>
                  <span className={css.userNum}>{item.person.profileInfo.followers}</span>
                  <img src={img} className={css.userIcons}/>
                  <span className={css.userNum}>{item.person.profileInfo.stars}</span>
                  <img src={img} className={css.userIcons}/>
                  <span className={css.userNum}>{item.person.profileInfo.photos}</span>
                </div>
              </div>
            </div>
            <div className={css.userRating}>
            <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginLeft:'auto',marginTop:'auto'}}>
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
            <p>{item.textReview}</p>
          </div>
        </div>
      )
    })
    return(
      <div className={css.profileComments}>
        {comments}
        {
          ObjectReview[0] === undefined ? null :
          <RatingButton 
            page={ObjectReview[0].maxPages}
            moreComents={this.moreComents}  />
        }
      </div>
    )
  }
}
export default withRouter(ProfileComments);