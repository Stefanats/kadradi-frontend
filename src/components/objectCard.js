import React from 'react';
import css from './styles/styles.scss';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import img from '../images/okvir.png';
import yel from '../images/pun.png';
import _ from 'lodash';
import { connect } from 'react-redux';



@connect(state => ({ 
  filter: state.filter,
  categoriesId: state.categoriesId

}))

@graphql(gql`
 query objectCl($objectCategoryId: Int){
  objectCl(objectCategoryId: $objectCategoryId){
    id
    name
    ratingCount
    avgRating
    isWorking
    objectLocations {
      city
    }
    objectCategory {
      name
    }
    images {
      profileImage {
        desc
        fileUrl
      }
    }
  }
 } `,
  {
    options: (props) => {
      return ({
        variables: {
          objectCategoryId: props.categoriesId.categoriesId,
        }
      })
    },
  }
)

class ObjectCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      niz: [],
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.data.objectCl != undefined) {
      this.setState({niz: nextProps.data.objectCl})
    }
  }
  slugify(text){
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }
  componentWillMount(){
    
  }
  render(){
    let { filter } = this.props.filter;
    let objects = [].concat(this.state.niz);
    let orderBy = _.orderBy(objects, [filter], [filter=='name' ? 'asc' : 'desc']);
    // asc
    let nesto = orderBy
    .map((item, key) =>
        <div className={css.objectCardItem} key={key}>
          <div className={css.objectImg} >
            <img alt={item.name} src={item.images.profileImage.fileUrl} />
          </div>
          <div className={css.objectInfoWrapper} >
            <div className={css.objectName} >
              <Link to={`/profile/${this.slugify(item.name)}`}>{item.name}</Link>
            </div>
            <div className={css.objectRating} >
            <Rating
              stop={5}
              initialRating={item.avgRating}
               />
               {item.avgRating} {item.ratingCount}
            </div>
            <div className={css.isWorkingWrapper}>
              <div className={css.objectInfo} >
                {item.objectCategory.name} pa ide grad
              </div>
              <div className={css.isWorking}>
                {item.isWorking == true ? 'radi' : 'ne radi'}
              </div>
            </div>
          </div>
        </div>
    )
    return(
      <div className={css.objectCard}>
        {nesto}
      </div>
    )
  }
}
export default ObjectCard;
