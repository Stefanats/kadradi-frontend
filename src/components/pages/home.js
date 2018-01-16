import React from 'react';
import css from '../styles/styles.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import DownStore from '../downStore';
import Categories from '../categories';
import InputBox from '../inputBox';
import Navigation from '../navigation';
import AllCategories from '../allCategories';
import Hamburger from '../hamburger';

//import imgs
import KadRadi_logo from '../../images/KadRadi-Logo-1.png';

// let paths = ['/about', '/addobject', '/']
class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			switch: true
		}
	}
	componentWillMount(){
		window.scroll(0,0);

		this.setState({
			switch: true
		})
	}
	clickHandler(){
		this.setState({
			switch: false
		})
	}
  render(){
		console.log('iz homa', this.props.location.pathname)
		// if(paths.indexOf(this.props.location.pathname) > -1){
		return(
			<div>
				<div className={css.header}>
					<Hamburger />
					<Navigation />
					<div style={{display:"flex",margin:"20px auto"}} >
						<img style={{margin:"auto"}} src={KadRadi_logo} />
					</div>
					<div className={css.headerText} >
						<h1>Desava Vam se da poljubite vrata?</h1>
						<p>U fva klika dodjite do radnog vremena i lokacije objekta</p>
						<p>preko 50 kategorija o 10000 objekta  na vasem dlanu</p>
					</div>
					<InputBox />
					<DownStore />
				</div>
				<div style={{display:`${this.state.switch == true ? 'block' : 'none'}`}}>
					<Categories />
				</div>
				<div 
					style={{display:`${this.state.switch == true ? 'flex' : 'none'}`}}
					className={css.categoriesButtonWrapper}>
        	<div onClick={() => this.clickHandler()} className={css.categoriesButton}>
          	Sve kategorije
        	</div>
      	</div>
				<div style={{display:`${this.state.switch == false ? 'block' : 'none'}`}}>
					<AllCategories />
				</div>
			</div>
		)
  }
}
export default Home;
