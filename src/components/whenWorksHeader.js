import React from 'react';
import css from './styles/styles.scss';
import WhenWorksNavigation from './whenWorksNavigation';
import WhenWorksInput from './whenWorksInput';
import logo from '../images/KadRadi-Logo-1.jpg';
import HamburgerSecond from './hamburgerSecond';

class WhenWorksHeader extends React.Component{
  render(){
    return(
      <div className={css.whenWorksHeader}> 
        <div className={css.navBox1}>
          {/* <img className={css.whenWorksLogo}src={logo} /> */}

        </div>
        <div className={css.navBox2}>
          <WhenWorksInput />
        </div>
        <div className={css.navBox3}>
          <WhenWorksNavigation />
          <div style={{position:'relative',marginTop:'10px'}}>
            <HamburgerSecond />
          </div>
        </div>
      </div>
    )
  }
}
export default WhenWorksHeader;
