import React from 'react';
import css from '../styles/styles.scss';
import radi from '../../images/Sat-radi.png';
import neRadi from '../../images/Sat-ne-radi.png';
import radiVip from '../../images/Sat-radi-placeno.png';
import neRadiVip from '../../images/Sat-ne-radi-placeno.png';

class ProfileWorkClock extends React.Component{
  render(){
    let clock = 
      this.props.isWorking && this.props.verified ? radiVip :
      !this.props.isWorking  && this.props.verified ? neRadiVip :
      this.props.isWorking && !this.props.verified  ? radi : neRadi;
    let isOpen = this.props.isWorking ? 'Otvoreno sada' : 'Zatvoreno sada';
    let color = this.props.isWorking ? '#63cc5a' : '#e3423d';
    let imgName = clock.split("/").pop();
    return(
      <div className={css.profileWorkClock}>
        <div className={css.profileWorkClockBox}>
          <img width={75} src={clock} alt={imgName} />
          <p style={{color:`${color}`}}>{isOpen}</p>
        </div>
      </div>
    )
  }
}
export default ProfileWorkClock;
