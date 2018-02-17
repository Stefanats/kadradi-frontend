import React from 'react';
import css from '../styles/styles.scss';
import radi from '../../images/Sat-radi.png';
import neRadi from '../../images/Sat-ne-radi.png';
import radiVip from '../../images/Sat-radi-placeno.png';
import neRadiVip from '../../images/Sat-ne-radi-placeno.png';

class ProfileWorkClock extends React.Component{
  render(){
    let clock = 
      this.props.isWorking.isWorking && this.props.verified.verified ? radiVip :
      !this.props.isWorking.isWorking  && this.props.verified.verified ? neRadiVip :
      this.props.isWorking.isWorking && !this.props.verified.verified  ? radi : neRadi;
    let isOpen = this.props.isWorking.isWorking ? 'Otvoreno sada' : 'Zatvoreno sada';
    let color = this.props.isWorking.isWorking ? '#63cc5a' : '#e3423d';
    return(
      <div className={css.profileWorkClock}>
        <div className={css.profileWorkClockBox}>
          <img src={clock} alt='sadad' style={{width:'100px'}} />
          <p style={{color:`${color}`,fontWeight:'bald'}}>{isOpen}</p>
        </div>
      </div>
    )
  }
}
export default ProfileWorkClock;
