import React from 'react';
import css from '../../styles/styles.scss';
import Sport from '../components/sport';
import Institutions from '../components/institutions';

const WrapperFive = () => {
  return (
    <div className={css.categorieWrappers}>
      <Sport />
      <Institutions />
    </div>
  )
}
export default WrapperFive;
