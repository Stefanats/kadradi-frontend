import React from 'react';
import css from '../../styles/styles.scss';
import Finance from '../components/finance';
import Healt from '../components/healt';

const WrapperOne = () => {
  return (
    <div className={css.categorieWrappers}>
      <Healt />
      <Finance />
    </div>
  )
}
export default WrapperOne;
