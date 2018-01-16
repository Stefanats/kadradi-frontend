import React from 'react';
import css from './styles/styles.scss';
import {HamburgerButton} from 'react-hamburger-button';

class Hamburger extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  handleClick() {
    this.setState({
        open: !this.state.open
    });
  }
  render(){
    return(
      <div className={css.hamburger}>
        <HamburgerButton
          color="#fff"
          open={this.state.open}
          onClick={this.handleClick.bind(this)}
        />
      </div>
    )
  }
}
export default Hamburger;