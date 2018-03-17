import React from 'react';
import css from './styles/styles.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Navigation extends React.Component{
  render(){
    console.log('iz nav',this.props)
    return(
      <div className={css.menuHolder}>
        <ul>
          <Link to="/"><li style={{backgroundColor:`${this.props.match.path == '/' ? 'red' : null}`}}>Pocetna</li></Link>
          <Link to="/addobject"><li style={{backgroundColor:`${this.props.match.path == '/addobject' ? 'red' : null}`}}>Dodaj Objekat</li></Link>
          <Link to="/about"><li style={{backgroundColor:`${this.props.match.path == '/about' ? 'red' : null}`}}>O nama</li></Link>
        </ul>
      </div>
    )
  }
}
export default withRouter(Navigation);