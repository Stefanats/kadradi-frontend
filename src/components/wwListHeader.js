import React from 'react';
import css from './styles/styles.scss';
import { connect } from 'react-redux';
import SelectFiltration from './selectFiltration';

@connect(state => ({ filter: state.filter }))

class WwListHeader extends React.Component{
  one = (e) => {
    this.props.dispatch({
      type: "SEND_VALUE",
      value: e.target.value
    });
  }
  render(){
    return(
      <div className={css.wwListHeader}>
        <div className={css.wwListNow}>Radi sada</div>
        <div className={css.wwListClose}>Blizu mene</div>
        <div className={css.selectFiltration}>
          <SelectFiltration />
        </div>
      </div>
    )
  }
}
export default WwListHeader;