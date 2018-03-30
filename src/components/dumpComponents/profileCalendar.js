import React from 'react';
import css from '../styles/styles.scss';

let style1 = {
  height: '100px',
  width: '100px',
  background: 'green'
}
let style2 = {
  height: '250px',
  width: '250px',
  background: 'yellow',
  overflow: 'hidden',
  position: 'relative',
}
let style3 = {
  height: '100px',
  width: '100px',
  background: 'red',
}
let style4 = {
  height: '50px',
  width: '50px',
  background: 'blue',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
}

class ProfileWorkClock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      arrLeft: [],
      arrMiddle: [],
      arrRight: [],
      id: 0,
    }
  }
  render(){
    return(
      <div className={css.calendarCircle}>
        <div className={css.calendarCircleWrapper}>
          <div style={style1}></div>
          <div style={style2}>
            <div style={style4}>
              
            </div>    
      

          </div>
          <div style={style3}></div>
        </div>
      </div>
    )
  }
}
export default ProfileWorkClock;
