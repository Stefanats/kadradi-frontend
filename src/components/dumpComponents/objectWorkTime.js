import React from 'react';
import css from '../styles/styles.scss';
import radi from '../../images/RADI.png';
import neRadi from '../../images/NE-RADI.png';

class ObjectWorkTime extends React.Component{
  splitArray = (item) => {
    let split = item.split('');
    let splited = split[0] + split[1] + '.' + split[2] + split[3];
    return splited;
  }
  render(){
    let sectorTimeInfo = this.props.objectCl.sectorTimeInfo.map((item, key) => {
      let openMonToFri = this.splitArray(item.monToFri.opening);
      let closeMonToFri = this.splitArray(item.monToFri.closing);
      let openSaturday = this.splitArray(item.saturday.opening);
      let closeSaturday = this.splitArray(item.saturday.closing);
      let openSunday = this.splitArray(item.sunday.opening);
      let closeSunday = this.splitArray(item.sunday.closing);
      let icon = item.isWorking ? radi : neRadi;
      let heading = item.isWorking ? '#63cc5a' : '#e3423d';
      return(
        <div key={key} className={css.restaurantWorkTime}>
          <div className={css.restaurantWorkTimeBox}>
            <h3 style={{color: heading}}>
              {item.name} <img width={15} src={icon}/>
            </h3>
            <p>(Pon, Pet: {openMonToFri} - {closeMonToFri})</p>
            {
              item.saturday.opening == '' || item.saturday.closing == '' ? 
              <p>({item.name} ne radi subotom.)</p> :
              <p>(Sub: {openSaturday} - {closeSaturday})</p>
            }
            {
              item.sunday.opening == '' || item.sunday.closing ? 
              <p>({item.name} ne radi nedeljom.)</p> :
              <p>(Ned: {openSunday} - {closeSunday})</p>
            }
          </div>
        </div>
      )
    })
    return(
      <div>
        { 
          !this.props.objectCl.sectorTimeInfo.length ? null : 
          <div className={css.objectWorkTime}>
            <div className={css.objectWorkTimeBox}>
              {sectorTimeInfo}
            </div>
          </div>
        }
      </div>
    )
  }
}
export default ObjectWorkTime;
