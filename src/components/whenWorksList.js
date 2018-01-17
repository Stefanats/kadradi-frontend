import React from 'react';
import css from './styles/styles.scss';
import WwListHeader from './wwListHeader';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

@graphql(gql`
 query people($id: Int,){
    people(id: $id) {
      email
    }
  }`,
  {
    options: (props) => {
      return ({
        variables: {
          id: 1,
        }
      })
    },
  }
)
class WhenWorksList extends React.Component{
  render(){
    console.log('ddasda', this.props)
    return(
      <div className={css.whenWorksList}>
        <WwListHeader />
      </div>
    )
  }
}
export default WhenWorksList;