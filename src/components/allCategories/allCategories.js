import React from 'react';
import css from '../styles/styles.scss';
import WrapperOne from './wrappers/wrapperOne';
import WrapperTwo from './wrappers/wrapperTwo';
import WrapperThree from './wrappers/wrapperThree';
import WrapperFour from './wrappers/wrapperFour';
import WrapperFive from './wrappers/wrapperFive';

class AllCtegories extends React.Component{
  render() {
    return (
      <div className={css.allCategories}>
        <div className={css.allCategoriesHeader}>
					<h2>Sve Karegorije</h2>
				</div>
        <div className={css.allCategoriesBody}>
          <div className={css.allCategoriesWrapper}>
            <WrapperOne />
            <WrapperTwo />
            <WrapperThree />
            <WrapperFour />
            <WrapperFive />
          </div>
        </div>
      </div>
    )
  }
}
export default AllCtegories;
