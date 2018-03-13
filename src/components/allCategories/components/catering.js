import React from 'react';
import css from '../../styles/styles.scss';
import CategoriesBox from './categorieBox';
import Kafane from '../../../images/Kafane.png';
import Klubovi from '../../../images/Klubovi.png';
import Kafici from '../../../images/Kafici.png';
import BrzaHrana from '../../../images/Brza-Hrana.png';
import Restorani from '../../../images/Restorani.png';
import Hoteli from '../../../images/Hoteli.png';

let array = [
  {
    name: 'Kafane',
    slika: Kafane,
    id: 1,
  },
  {
    name: 'Klubovi',
    slika: Klubovi,
    id: 2,
  },
  {
    name: 'Kafići',
    slika: Kafici,
    id: 3,
  },
  {
    name: 'Brza hrana',
    slika: BrzaHrana,
    id: 4,
  },
  {
    name: 'Restorani',
    slika: Restorani,
    id: 5,
  },
  {
    name: 'Hoteli',
    slika: Hoteli,
    id: 6,
  },
]
let name = 'Ugostiteljstvo';

class Catering extends React.Component{
  render() {
    return (
      <CategoriesBox
        array={array}
        name={name}
        justify='center'
        margin='0 auto'
        class={css.categorieBoxBody}/>
    )
  }
}
export default Catering;