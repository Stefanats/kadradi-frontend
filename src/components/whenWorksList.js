import React from 'react';
import css from './styles/styles.scss';
import WwListHeader from './wwListHeader';
import ObjectCard from './objectCard';
import SelectFiltration from './selectFiltration';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

@connect(state => ({ 
  arrayCount: state.arrayCount,
}))

class WhenWorksList extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        nizLength: 0,
    }
  }
  render(){
    console.log('props wwl', this.props.data)
    return(
      <div className={css.whenWorksList}>
        <WwListHeader />
        <div className={css.listedObjects}>
          <div>
            <p>potvrdjeno ({this.props.arrayCount.count})</p>
          </div>
          <div>
            <SelectFiltration />
          </div>
        </div>
        <ObjectCard {...this.props} />
      </div>
    )
  }
}
export default withRouter(WhenWorksList);
