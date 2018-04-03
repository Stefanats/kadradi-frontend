import React from 'react';
import css from './styles/styles.scss';
import { Link } from 'react-router-dom';

// import images
import apoteke from '../images/Apoteke.png';
import banke from '../images/Banke.png';
import bankomati from '../images/Bankomati.png';
import klinike from '../images/Klinike.png';
import menjacnice from '../images/Menjacnice.png';
import restorani from '../images/Restorani.png';
import kafici from '../images/Kafici.png';
import brzaHrana from '../images/Brza-Hrana.png';
import marketi from '../images/Marketi.png';
import hoteli from '../images/Hoteli.png';
import operateri from '../images/Operateri.png';
import laboratorije from '../images/Laboratorije.png';
import { connect } from 'react-redux';


let niz = [
	{
		id: 1,
		name: "Apoteke",
		slika: apoteke
	},
	{
		id: 2,
		name: "Laboratorije",
		slika: laboratorije
	},
	{
		id: 3,
		name: "Klinike",
		slika: klinike
	},
	{
		id: 4,
		name: "Banke",
		slika: banke
	},
	{
		id: 5,
		name: "Menjačnice",
		slika: menjacnice
	},
	{
		id: 6,
		name: "Laboratorije",
		slika: laboratorije
	},
]

@connect(state => ({ filter: state.filter }))

class Categories extends React.Component {
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
	sendCategoriesId = (item) => {
    this.props.dispatch({
      type: "SEND_CATEGORIESID",
      value: item.id
    });
  }
  render() {
		let singleCategorie = niz.map((item,key) => {
			return(
				<div 
					key={key}
					className={css.singleCategorie}
					onClick={() => this.sendCategoriesId(item)}>
					<Link  to={`/view/${item.name.toLowerCase()}/${item.id}`}>
					<div className={css.singleCategorieBox}>
						<img className={css.singleImg} alt={item.ime} src={item.slika}/>
						<p className={css.singleText}>{item.name}</p>
					</div>
					</Link>
				</div>
			)
		})
    return(
			<div
				style={{left:`${this.state.left ? '0' : '-100%'}`}}
				className={css.categories}>
        <div className={css.categoriesHeader}>
					<h2>Popularne Kategorije</h2>
				</div>
				<div className={css.popularCategories}>
					{singleCategorie}
				</div>
				<div 
						className={css.categoriesButtonWrapper}>
        		<div  onClick={() => this.props.clickHandler(false)} className={css.categoriesButton}>
        	  	Sve kategorije
        		</div>
      		</div>
      </div>
    )
  }
}
export default Categories;
