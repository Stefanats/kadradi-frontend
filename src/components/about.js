import React from 'react';
import css from './styles/styles.scss';
import DownStore from './downStore';
import Navigation from './navigation';
import Hamburger from './hamburger';
import ReactTransitionGroup from 'react-addons-transition-group'
import { setTimeout } from 'timers';
import Ham from './ham';
import { Link } from 'react-router-dom';

class About extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
				<Link to="https://www.google.rs/maps/dir/44.7792078,20.4075291/''/@44.7814503,20.4071329,16z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x475a6fcdf01af3bb:0xa5264f41bf054a8c!2m2!1d20.4128755!2d44.7790404!3e0" target='blank'>mapaaaaaaaaaaaaaaaaaa</Link>
      </div>
    )
  }
}
export default About;