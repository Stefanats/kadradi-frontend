import React from 'react';
import css from '../styles/styles.scss';
import Navigation from '../navigation';
import DownStore from '../downStore';

class AddObject extends React.Component{
  render(){
    return(
      <div className={css.addObject}>
        <Navigation />
				<DownStore />
      </div>
    )
  }
}
export default AddObject;