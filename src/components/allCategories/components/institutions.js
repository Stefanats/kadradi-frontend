import React from 'react';
import css from '../../styles/styles.scss';
import CategoriesBox from './categorieBox';
import Kafane from '../../../images/Kafane.png';
import Klubovi from '../../../images/Klubovi.png';
import Kafici from '../../../images/Kafici.png';

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
]
let name = 'Drzavne institucije';

class Institutions extends React.Component{
  render() {
    return (
      <CategoriesBox
        array={array}
        name={name}
        cssClassThree/>
    )
  }
}
export default Institutions;
