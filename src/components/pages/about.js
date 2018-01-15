import React from 'react';
import css from '../styles/styles.scss';
import DownStore from '../downStore';
import Navigation from '../navigation';

class About extends React.Component{
  render(){
    console.log('about', this.props)
    return(
      <div className={css.about}>
        <Navigation />
        <DownStore />
      </div>
    )
  }
}
export default About;