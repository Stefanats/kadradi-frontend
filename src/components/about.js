import React from 'react';
import css from './styles/styles.scss';
import DownStore from './downStore';
import Navigation from './navigation';
import Hamburger from './hamburger';
import ReactTransitionGroup from 'react-addons-transition-group'
import { setTimeout } from 'timers';

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      left: true,
      display: true
    }
  }
  click(){
    this.setState({
      display: !this.state.display
    })
    setTimeout(
        this.setState({
          display: !this.state.display
        }), 1000
    )
  }
  render(){
    let stylez = {
      width: '100px',
      height: '100px',
      position: 'relative',
      background: 'red',
      overflow: 'hidden'
    }
    let stajl = {
      left: `${this.state.top ? '50px' : '50px'}`,
      height: '100px',
      transition: '1s',
      width: '100px',
      background: 'yellow',
      position: 'relative',
      display: `${this.state.display ? 'block' : 'none'}`
    }
    let stajll = {
      right: '50%',
      height: '100px',
      width: '100px',
      background: 'green',
      position: 'relative'
    }
    return(
      <div className={css.about}>
        <Hamburger />
        <Navigation />
        <DownStore />
        <div style={stylez}>
            <div style={stajl}>

            </div>
        </div>
        <div onClick={()=> this.click()}>
          click
        </div>
      </div>
    )
  }
}
export default About;