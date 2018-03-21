import React from 'react';
import css from '../../styles/styles.scss';
import Banke from '../../../images/Banke.png';
import Menjacnice from '../../../images/Menjacnice.png';
import Bankomati from '../../../images/Bankomati.png';
import CategoriesBox from './categorieBox';

let array = [
  {
    name: 'Banke',
    slika: Banke,
    id: 1,
  },
  {
    name: 'Menjacnice',
    slika: Menjacnice,
    id: 2,
  },
  {
    name: 'Bankomati',
    slika: Bankomati,
    id: 3,
  },
]
let name = 'Finansije';

class Finance extends React.Component{
  render() {
    return (
      <CategoriesBox
        array={array}
        name={name}
        cssClassThree
        justify='flex-start'
        margin='0 auto 0 0'
        class={css.categorieBoxBodyR}/>
    )
  }
}
export default Finance;
