import React from 'react';
import css from '../styles/styles.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import DownStore from '../downStore';
import Categories from '../categories';
import InputBox from '../inputBox';
import Navigation from '../navigation';

//import imgs
import KadRadi_logo from '../../images/KadRadi-Logo-1.png';

// let paths = ['/about', '/addobject', '/']
class Home extends React.Component{
  render(){
		console.log('iz homa', this.props.location.pathname)
		// if(paths.indexOf(this.props.location.pathname) > -1){
		return(
			<div>
				<div className={css.header}>
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
				<Categories />
			</div>
		)
  }
}
export default Home;
