import React from 'react';
import css from '../styles/styles.scss';
import WrapperOne from './wrappers/wrapperOne';
import WrapperTwo from './wrappers/wrapperTwo';
import WrapperThree from './wrappers/wrapperThree';
import WrapperFour from './wrappers/wrapperFour';
import WrapperFive from './wrappers/wrapperFive';
import { connect } from 'react-redux';

@connect(state => 
	({ switch: state.switch}))


class AllCategories extends React.Component{
  constructor(props){
		super(props);
  }
  componentWillMount() {
		setTimeout(() => {
			this.props.dispatch({
				type: "CATEGORIES_SWITCH",
				value: false,
			});
		}, 100);
	}
	componentWillUnmount() {
		this.props.dispatch({
			type: "CATEGORIES_SWITCH",
			value: true,
		});
	}
  render() {
		let checkSwitch = this.props.switch.switch;
    return (
      <div 
        style={{left:`${checkSwitch ? '-100%' : '0'}`}}
        className={css.allCategories}>
        <div className={css.allCategoriesHeader}>
					<h2>Sve Kategorije</h2>
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
        <div 
						className={css.categoriesButtonWrapper}>
        		<div onClick={() => this.props.clickHandler(true)} className={css.categoriesButton}>
        	  	Popularne kategorije
        		</div>
      		</div>
      </div>
    )
  }
}
export default AllCategories;
