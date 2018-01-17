import React from 'react';
import css from './styles/styles.scss';
import FaSearch from 'react-icons/lib/fa/search';

class WhenWorksInput extends React.Component{
  render(){
    return(
      <div className={css.whenWorksInputWrapper}>
        <div className={css.whenWorksInputHolder}>
          <input placeholder="Trazi Apoteke, Banke i slicno..." className={css.whenWorksInput} />
          <div className={css.whenWorksButton}><FaSearch /> Trazi</div>
        </div>
      </div>
    )
  }
}
export default WhenWorksInput;