import React from 'react';
import css from './styles/styles.scss';
import WwListHeader from './wwListHeader';
import ObjectCard from './objectCard';
import SelectFiltration from './selectFiltration';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

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
    return(
      <div className={css.whenWorksList}>
        <WwListHeader {...this.props}/>
        <div className={css.listedObjects}>
          <div>
            <div>potvrdjeno ({this.props.arrayCount.count})</div>
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
