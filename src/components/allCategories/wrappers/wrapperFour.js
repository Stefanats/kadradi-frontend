import React from 'react';
import css from '../../styles/styles.scss';
import Pets from '../components/pets';
import Vehicles from '../components/vehicles';

const WrapperFour = () => {
  return (
    <div className={css.categorieWrappers}>
      <Pets />
      <Vehicles />
    </div>
  )
}
export default WrapperFour;
