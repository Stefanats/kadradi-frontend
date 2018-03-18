import React from 'react';
import css from './styles/styles.scss';
import { Link } from 'react-router-dom';

class WhenWorksNavigation extends React.Component{
  render(){
    return(
      <div className={css.whenWorksNavigation}>
        <div><Link to="/"><p>Pocetna</p></Link></div>
        <div><Link to="/addobject"><p>Dodaj Objekat</p></Link></div>
        <div><Link to="/about"><p>O nama</p></Link></div>
      </div>
    )
  }
}
export default WhenWorksNavigation;

{/* <ul>
<Link to="/"><li >Pocetna</li></Link>
<Link to="/addobject"><li >Dodaj Objekat</li></Link>
<Link to="/about"><li >O nama</li></Link>
</ul> */}