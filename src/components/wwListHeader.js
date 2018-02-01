import React from 'react';
import css from './styles/styles.scss';
import { connect } from 'react-redux';

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
        <select onChange={this.one}>
          <option hidden>Poredjaj po</option>
          <option className={css.dajbre} value='name' >Abc</option>
          <option value='avgRating'>By avg rating</option>
          <option value='ratingCount'>rating count</option>
        </select>
      </div>
    )
  }
}
export default WwListHeader;