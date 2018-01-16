import React from 'react';
import css from '../styles/styles.scss';
import Navigation from '../navigation';
import DownStore from '../downStore';
import Hamburger from '../hamburger';

class AddObject extends React.Component{
  render(){
    return(
      <div className={css.addObject}>
        	<div className={css.hamburgerWrapper}>
						<Hamburger />
					</div>
        <Navigation />
				<DownStore />
      </div>
    )
  }
}
export default AddObject;