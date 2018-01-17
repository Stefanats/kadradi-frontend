import React from 'react';
import css from './styles/styles.scss';
import { Link } from 'react-router-dom';

class WhenWorksNavigation extends React.Component{
  render(){
    return(
      <div className={css.whenWorksNavigation}>
        <ul>
          <Link to="/"><li >Pocetna</li></Link>
          <Link to="/addobject"><li >Dodaj Objekat</li></Link>
          <Link to="/about"><li >O nama</li></Link>
        </ul>
      </div>
    )
  }
}
export default WhenWorksNavigation;
