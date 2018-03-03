import React from 'react';
import css from '../styles/styles.scss';
import Proba from '../proba';

class ProfileWorkClock extends React.Component{
  render(){
    return(
      <div className={css.calendarCircle}>
        <div className={css.calendarCircleWrapper}>
          <div className={css.blueCircle}>
            <Proba />
          </div>
          <div className={css.orangeCircle}>

          </div>
        </div>
      </div>
    )
  }
}
export default ProfileWorkClock;
