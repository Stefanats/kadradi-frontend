import React from 'react';
import css from '../../styles/styles.scss';

class Vehicles extends React.Component{
  render() {
    return (
      <div className={css.categorieBox}>
        <div className={css.categorieBoxHeader}>
          <p>Za automobile</p>
        </div>
        <div className={css.categorieBoxItemEmpty}>

        </div>
      </div>
    )
  }
}
export default Vehicles;
