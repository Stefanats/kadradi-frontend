import React from 'react';
import css from '../styles/styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

@connect(state => ({ menuModal: state.menuModal }))

class Menu extends React.Component{
  toRedux = () => {
    this.props.dispatch({
      type: 'MENU_MODAL',
      value: false,
    })
  }
  render(){
    let display = this.props.menuModal.display;
    return(
      <div
        style={{
          zIndex: `${!display ? '-1' : '3000'}`,
          opacity: `${!display ? '0' : '1'}`,
        }}
        className={css.menuIndexWrapper}
        onClick={() => this.toRedux()}>
        <div
          className={css.menuIndex}
          onClick={(e) => {e.stopPropagation()}}
        style={{
          left: `${!display ? '-100%' : '0'}`,
        }}>
        <p
          onClick={() => this.toRedux()}
          style={{
          position:'absolute',
          top: '5px',
          right: '10px',
          fontSize: '30px',
          color: 'white',
          cursor: 'pointer',
          }}>X</p>
            <ul
              onClick={() => this.toRedux()}
              className={css.menuIndexNav}>
              <Link to="/"><li>Pocetna</li></Link>
              <Link to="/addobject"><li>Dodaj Objekat</li></Link>
              <Link to="/about"><li>O nama</li></Link>
            </ul>
        </div>
      </div>
    )
  }
}
export default Menu;
