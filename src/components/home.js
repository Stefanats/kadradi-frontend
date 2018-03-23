import React from 'react';
import css from './styles/styles.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import DownStore from './downStore';
import Categories from './categories';
import InputBox from './inputBox';
import Navigation from './navigation';
import AllCategories from './allCategories/allCategories';
import PopularCategories from './popularCategories/popularCategories';
import Hamburger from './hamburger';
import {geolocated} from 'react-geolocated';

//import imgs
import KadRadi_logo from '../images/KadRadi-Logo-1.png';

@geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			switch: true
		}
	}
	componentWillMount(){
		if (typeof(window) !== 'undefined') {
			var timer = setTimeout(function() {
				window.scroll(0,0);
			}, 200);
	}

		this.setState({
			switch: true
		})
	}
	clickHandler(e){
		this.setState({
			switch: e
		})
	}
  render(){
		return(
			<div>
				<div className={css.header}>
					<Hamburger />
					<Navigation />
					<div className={css.homeIconWrapper} >
						<img className={css.homeIcon} style={{margin:"auto"}} src={KadRadi_logo} />
					</div>
					<div className={css.headerText} >
						<h1 className={css.headerTextH1} style={{marginBottom:'20px'}}>Desava Vam se da poljubite vrata?</h1>
						<p>U fva klika dodjite do radnog vremena i lokacije objekta</p>
						<p>preko 50 kategorija o 10000 objekta  na vasem dlanu</p>
					</div>
					<InputBox />
					<DownStore />
				</div>
				<div className={css.categoriesWrapper}>
						<Categories clickHandler={(e) => this.clickHandler(e)} />
						<AllCategories clickHandler={(e) => this.clickHandler(e)}/>
					{/* <PopularCategories /> */}
				</div> 
			</div>
		)
  }
}
export default Home;
