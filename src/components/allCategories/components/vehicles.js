import React from 'react';
import css from '../../styles/styles.scss';
import Apoteke from '../../../images/Apoteke.png';
import Laboratorije from '../../../images/Laboratorije.png';
import Klinike from '../../../images/Klinike.png';
import CategoriesBox from './categorieBox';

let array = [
  {
    name: 'Apoteke',
    slika: Apoteke,
    id: 1,
  },
  {
    name: 'Laboratorije',
    slika: Laboratorije,
    id: 2,
  },
  {
    name: 'Klinike',
    slika: Klinike,
    id: 3,
  },
]
let name = 'Kola';

class Vehicles extends React.Component{
  render() {
    return (
      <CategoriesBox
        array={array}
        name={name}
        cssClassThree
        justify='flex-start'/>
    )
  }
}
export default Vehicles;
