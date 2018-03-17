import React from 'react';
import css from './styles/styles.scss';
import WhenWorksNavigation from './whenWorksNavigation';
import WhenWorksInput from './whenWorksInput';
import logo from '../images/KadRadi-Logo-1.jpg';
import Hamburger from './hamburger';

class WhenWorksHeader extends React.Component{
  render(){
    return(
      <div className={css.whenWorksHeader}>
        <div style={{flex:"1",position:'relative'}}>
          {/* <img className={css.whenWorksLogo}src={logo} /> */}
          <div style={{position:'relative', margin:"7px 0 7px 7px"}}>
          <Hamburger />
          </div>
        </div>
        <div style={{flex:"4"}}>
          <WhenWorksInput />
        </div>
        <div style={{flex:"4",display:"flex"}}>
          <WhenWorksNavigation />
        </div>
      </div>
    )
  }
}
export default WhenWorksHeader;