import React from 'react';
import css from './styles/styles.scss';
import DownStore from './downStore';
import Navigation from './navigation';
import Hamburger from './hamburger';
import ReactTransitionGroup from 'react-addons-transition-group'
import { setTimeout } from 'timers';
import Ham from './ham';

class About extends React.Component{
  constructor(props){
    super(props);

  }
  showSettings(){
    console.log('sdds')
  }
  render(){

    return(
      <div className={css.about}>
        <Hamburger />
        <Navigation />
        <DownStore />
        <Ham />
      </div>
    )
  }
}
export default About;