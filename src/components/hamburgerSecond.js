import React from 'react';
import css from './styles/styles.scss';
import { HamburgerButton } from 'react-hamburger-button';
import { Link } from 'react-router-dom';

class HamburgerSecond extends React.Component{
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
    return(
			<div className={css.hamburgerWrapperS}>
        <div className={css.hamburgerS}>
          <HamburgerButton
            color="#fff"
            open={this.state.open}
            onClick={this.handleClick.bind(this)}
          />
          <div 
            style={{display: `${this.state.open == true ? 'block' : 'none'}`}}
            className={css.hamburgerListWrapperS}>
            <ul className={css.hamburgerListS}>
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
export default HamburgerSecond;