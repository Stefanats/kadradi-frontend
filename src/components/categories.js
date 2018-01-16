import React from 'react';
import css from './styles/styles.scss';
import { Link } from 'react-router-dom';

// import images
import medical from '../images/medical.png';
let niz = [
	{
		ime: 'Apoteke',
		slika: medical
	},
	{
		ime: 'Menjacnice',
		slika: medical
	},
	{
		ime: 'Kafici',
		slika: medical
	},
	{
		ime: 'Banke',
		slika: medical
	},
	{
		ime: 'Restorani',
		slika: medical
	},
	{
		ime: 'Laboratorije',
		slika: medical
	},
	{
		ime: 'Apoteke',
		slika: medical
	},
	{
		ime: 'Menjacnice',
		slika: medical
	},
	{
		ime: 'Kafici',
		slika: medical
	},
	{
		ime: 'Banke',
		slika: medical
	},
	{
		ime: 'Restorani',
		slika: medical
	},
	{
		ime: 'Laboratorije',
		slika: medical
	},
]
class Categories extends React.Component {
  render() {
		let singleCategorie = niz.map((item,key) => {
			return(
				<div key={key} className={css.singleCategorie}>
					<Link target="_blank" rel="noopener noreferrer" to={`/view/${item.ime.toLowerCase()}`}>
						<div className={css.singleAbsolute}>
							<div className={css.singleFlex}>
								<div className={css.singleImg}>
									<img alt={item.ime} src={item.slika}/>
								</div>
								<div className={css.singleText}>
									{item.ime}
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
