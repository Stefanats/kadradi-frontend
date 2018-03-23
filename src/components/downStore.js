import React from 'react';
import css from './styles/styles.scss';
import { Link } from 'react-router-dom';
import appStore from '../images/app_store.png';
import googlePlay from '../images/google_play.png';

class DownStore extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			x: true
		}
	}
	componentWillMount(){
		this.setState({
			x: true
		})
	}
	clickHandler(){
		this.setState({
			x: false
		})
	}
  render(){
    return(
      <div style={{display:`${this.state.x == true ? 'block' : 'none'}`}} className={css.downStore}>
				<div className={css.imgWrapper}>
					<div className={css.first}>
						<a href="https://play.google.com/store/search?q=facebook&hl=sr">
							<img src={googlePlay}/>
						</a>
					</div>
					<div className={css.second}>
						<a href='https://itunes.apple.com/us/app/facebook/id284882215?mt=8'>
							<img src={appStore}/>
						</a>
					</div>
				</div>
				<div className={css.textWrapper}>
					<p>Skinite aplikaciju i otkljucajte</p>
					<p>mnostvo mogucnosti</p>
					<p>koje Vam priza Kad Radi!</p>
				</div>
				<div onClick={() => this.clickHandler()} className={css.x}>
					X
				</div>
      </div>
    )
  }
}
export default DownStore;
