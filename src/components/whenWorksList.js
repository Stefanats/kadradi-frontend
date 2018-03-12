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
    let {objectCl} = this.props.data || [];

    console.log('CCCCCCCCCCCCC', objectCl)
    return(
      <div className={css.whenWorksList}>
        <WwListHeader />
        <div className={css.listedObjects}>
          {
            objectCl === undefined ? null : 
          <div>
            <p>potvrdjeno ({objectCl.length})</p>
          </div>
          }
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