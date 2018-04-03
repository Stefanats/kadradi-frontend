import React from 'react';
import css from '../styles/styles.scss';
import WrapperOne from './wrappers/wrapperOne';
import WrapperTwo from './wrappers/wrapperTwo';
import WrapperThree from './wrappers/wrapperThree';
import WrapperFour from './wrappers/wrapperFour';
import WrapperFive from './wrappers/wrapperFive';

class AllCategories extends React.Component{
  constructor(props){
		super(props);
		this.state = {
			left: false,
		}
	}
	componentWillMount(){
		setTimeout(() => {
			this.setState({
				left: true,
			})
		}, 100);
	}
  render() {
    return (
      <div 
        style={{left:`${this.state.left ? '0' : '-100%'}`}}
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
