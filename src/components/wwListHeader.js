import React from 'react';
import css from './styles/styles.scss';

class WwListHeader extends React.Component{
  render(){
    return(
      <div className={css.wwListHeader}>
        <div className={css.wwListNow}>Radi sada</div>
        <div className={css.wwListClose}>Blizu mene</div>
        <select>
          <option hidden>Poredjaj po</option>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>
    )
  }
}
export default WwListHeader;