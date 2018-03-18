import React from 'react';
import css from './styles/styles.scss';
import WwListHeader from './wwListHeader';
import ObjectCard from './objectCard';
import SelectFiltration from './selectFiltration';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';

@graphql(gql`
 query objectCl($objectCategoryId: Int) {
  objectCl(objectCategoryId: $objectCategoryId) {
    id
  }
 } `,
  {
    options: (props) => {
      let trimId = props.location.pathname;
      let id = trimId.split("/").pop();
      return ({
        variables: {
          objectCategoryId: id,
        }
      })
    },
  }
)


class WhenWorksList extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        nizLength: 0,
    }
  }
  render(){
    let objectCl = [];
    objectCl = this.props.data.objectCl || [];
    console.log('LIST', objectCl.length)

    return(
      <div className={css.whenWorksList}>
        <WwListHeader />
        <div className={css.listedObjects}>
          <div> 
            <p>potvrdjeno ()</p>
          </div>
          <div>
            <SelectFiltration />
          </div>
        </div>
        <ObjectCard />
      </div>
    )
  }
}
export default withRouter(WhenWorksList);