import React from 'react';
import css from './styles/styles.scss';
import WhenWorksNavigation from './whenWorksNavigation';
import WhenWorksInput from './whenWorksInput';
import logo from '../images/KadRadi-Logo-1.jpg'

class WhenWorksHeader extends React.Component{
  render(){
    return(
      <div className={css.whenWorksHeader}>
        <div style={{flex:"1"}}>
          {/* <img className={css.whenWorksLogo}src={logo} /> */}
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