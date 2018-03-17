import React from 'react';
import css from './styles/styles.scss';
import { HamburgerButton } from 'react-hamburger-button';
import { Link } from 'react-router-dom';

class Hamburger extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  handleClick() {
    this.setState({
        open: this.state.open == false ? true : false
    });
  }
  componentWillMount(){
    this.setState({
      open: false
    })
  }
  render(){
    console.log('adadad', this.state.open)
    return(
			<div className={css.hamburgerWrapper}>
        <div className={css.hamburger}>
          <HamburgerButton
            color="#fff"
            open={this.state.open}
            onClick={this.handleClick.bind(this)}
          />
          <div style={{display: `${this.state.open == true ? 'block' : 'none'}`}} className=  {css.hamburgerListWrapper}>
            <ul className={css.hamburgerList}>
              <Link to="/"><li>Pocetna</li></Link>
              <Link to="/addobject"><li>Dodaj Objekat</li></Link>
              <Link to="/about"><li>O nama</li></Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Hamburger;