import React from 'react';
import css from '../styles/styles.scss';
import DownStore from '../downStore';
import Navigation from '../navigation';
import Hamburger from '../hamburger';

class About extends React.Component{
  render(){
    console.log('about', this.props)
    return(
      <div className={css.about}>
        <Hamburger />
        <Navigation />
        <DownStore />
      </div>
    )
  }
}
export default About;