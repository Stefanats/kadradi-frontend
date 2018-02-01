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
import { connect } from 'react-redux';


let niz = [
	{
		id: 1,
		name: "Apoteke",
		slika: apoteke
	},
	{
		id: 2,
		name: "Klinike",
		slika: klinike
	},
	{
		id: 3,
		name: "Banke",
		slika: banke
	},
	{
		id: 4,
		name: "Menjačnice",
		slika: menjacnice
	},
	{
		id: 5,
		name: "Bankomati",
		slika: bankomati
	},
	{
		id: 6,
		name: "Restorani",
		slika: restorani
	},
	{
		id: 7,
		name: "Kafići",
		slika: kafici
	},
	{
		id: 8,
		name: "Brza hrana",
		slika: brzaHrana
	},
	{
		id: 9,
		name: "Marketi",
		slika: marketi
	},
	{
		id: 10,
		name: "Hoteli",
		slika: hoteli
	},
	{
		id: 11,
		name: "Operateri",
		slika: operateri
	}
]

@connect(state => ({ filter: state.filter }))

class Categories extends React.Component {


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
					<Link  to={`/view/${item.name.toLowerCase()}`}>
						<div className={css.singleAbsolute}>
							<div className={css.singleFlex}>
								<div className={css.singleImg}>
									<img alt={item.ime} src={item.slika}/>
								</div>
								<div className={css.singleText}>
									{item.name}
								</div>
							</div>
						</div>
					</Link>
				</div>
			)
		})
    return(
      <div className={css.categories}>
        <div className={css.categoriesHeader}>
					<h2>Popularne Karegorije</h2>
				</div>
				<div className={css.popularCategories}>
					{singleCategorie}
				</div>
      </div>
    )
  }
}
export default Categories;
