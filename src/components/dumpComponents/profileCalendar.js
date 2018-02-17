import React from 'react';
import css from '../styles/styles.scss';
import Calendar from 'react-calendar';
import Proba from '../proba';

class ProfileWorkClock extends React.Component{
  render(){
    return(
      <div style={{display:'flex'}}>
        <div style={{position:'relative',flex:'1', paddingBottom:'50%'}}>
          <div className={css.blueCircle}>
            <div style={{margin:"auto"}}>
              <Proba />
            </div>
          </div>
        </div>
        <div style={{position:'relative',flex:'1', paddingBottom:'50%'}}>
          <div className={css.orangeCircle}>
          </div>
        </div>
      </div>
    )
  }
}
export default ProfileWorkClock;
