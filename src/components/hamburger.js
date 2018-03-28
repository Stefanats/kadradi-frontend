import React from 'react';
import css from './styles/styles.scss';
import { HamburgerButton } from 'react-hamburger-button';
import { connect } from 'react-redux';

@connect(state => ({ menuModal: state.menuModal }))

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
    this.props.dispatch({
      type: 'MENU_MODAL',
      value: true,
    })
  }
  componentWillMount(){
    this.setState({
      open: false
    })
  }
  render(){
    let display = this.props.menuModal.display;
    return(
			<div className={css.hamburgerWrapper}>
        <div className={css.hamburger}>
          <HamburgerButton
            color="#fff"
            open={display}
            onClick={this.handleClick.bind(this)}
          />
          {/* <div 
            style={{display: `${this.state.open == true ? 'block' : 'none'}`}}
            className={css.hamburgerListWrapper}>
            <ul className={css.hamburgerList}>
              <Link to="/"><li>Pocetna</li></Link>
              <Link to="/addobject"><li>Dodaj Objekat</li></Link>
              <Link to="/about"><li>O nama</li></Link>
            </ul>
          </div> */}
        </div>
      </div>
    )
  }
}
export default Hamburger;