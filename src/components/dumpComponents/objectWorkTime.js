import React from 'react';
import css from '../styles/styles.scss';
import radi from '../../images/RADI.png';
import neRadi from '../../images/NE-RADI.png';

class ObjectWorkTime extends React.Component{
  splitArray = (item) => {
    if(item === ''){
      return item;
    }
    else {
      let split = item.split('');
      let splited = split[0] + split[1] + '.' + split[2] + split[3];
      return splited;
    }
  }
  render(){

  console.log('AU SANEEEEEEEE', this.props.objectCl)
    let sectorTimeInfo = this.props.objectCl.sectorTimeInfo.map((item, key) => {
      let openMonday = this.splitArray(item.monday.opening);
      let closeMonday = this.splitArray(item.monday.closing);
      let openTuesday = this.splitArray(item.tuesday.opening);
      let closeTuesday = this.splitArray(item.tuesday.closing);
      let openWednesday = this.splitArray(item.wednesday.opening);
      let closeWednesday = this.splitArray(item.wednesday.closing);
      let openThursday = this.splitArray(item.thursday.opening);
      let closeThursday = this.splitArray(item.thursday.closing);
      let openFriday = this.splitArray(item.friday.opening);
      let closeFriday = this.splitArray(item.friday.closing);
      let icon = item.isWorking ? radi : neRadi;
      let heading = item.isWorking ? '#63cc5a' : '#e3423d';
      let niz = [
        {
          name: 'Pon',
          time: `${openMonday + ' - ' + closeMonday}`,
        },
        {
          name: 'Uto',
          time: `${openTuesday + ' - ' + closeTuesday}`,
        },
        {
          name: 'Sre',
          time: `${openWednesday + ' - ' + closeWednesday}`,
        },
        {
          name: 'Cet',
          time: `${openThursday + ' - ' + closeThursday}`,
        },
        {
          name: 'Pet',
          time: `${openFriday + ' - ' + closeFriday}`,
        },
      ]
      let days = niz.map((item, key) => {
        return(
          <div key={key} style={{padding:'5px 0',display:'flex',borderBottom:'0.75px solid #e6e6e6'}}>
            <div style={{width:'40px'}}>
              <p style={{color:'rgb(73, 73, 73)',fontWeight:'600'}}>
                {item.name}
              </p>
            </div>
            <div>  
              <p>
                {item.time}
              </p>
            </div>
          </div>
        )
      })
      return(
        <div key={key} className={css.restaurantWorkTime}>
          <div className={css.restaurantWorkTimeBox}>
            <h3 style={{margin:'0',padding:'5px 0',color:'#9b9b9b',fontWeight:'600',fontSize:'16px', borderBottom:'0.75px solid #e6e6e6'}}>
              {item.name} <img width={15} src={icon}/>
            </h3>
            {days}
          </div>
        </div>
      )
    })
    return(
      <div className={css.objectWorkTime}>
        { 
          !this.props.objectCl.sectorTimeInfo.length ? null : 
            <div className={css.objectWorkTimeBox}>
              {sectorTimeInfo}
            </div>
        }
      </div>
    )
  }
}
export default ObjectWorkTime;
