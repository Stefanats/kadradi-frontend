import React from 'react';
import css from '../../styles/styles.scss';
import CategoriesBox from './categorieBox';
import Marketi from '../../../images/Marketi.png';
import Cvecare from '../../../images/Cvecare.png';
import SopingMolovi from '../../../images/Soping-Molovi.png';
import Bioskiopi from '../../../images/Bioskiopi.png';
import Kladionice from '../../../images/Kladionice.png';
import Biletarnice from '../../../images/Biletarnice.png';
import Farbare from '../../../images/Farbare.png';
import Pozoriste from '../../../images/Pozoriste.png';
import Trafike from '../../../images/Trafike.png';
import TehnikaRacunari from '../../../images/Tehnika-i-Racunari.png';
import Butici from '../../../images/Butici.png';
import SaloniLepote from '../../../images/Saloni-lepote.png';
import Operateri from '../../../images/Operateri.png';
import Knjizare from '../../../images/Knjizare.png';
import Optike from '../../../images/Optike.png';
import ZanatskeRadnje from '../../../images/Zanatske-radnje.png';
import Pekare from '../../../images/Pekare.png';
import Muzeji from '../../../images/Muzeji.png';

let array = [
  {
    name: 'Marketi',
    slika: Marketi,
    id: 1,
  },
  {
    name: 'Cvecare',
    slika: Cvecare,
    id: 2,
  },
  {
    name: 'Soping molovi',
    slika: SopingMolovi,
    id: 3,
  },
  {
    name: 'Bioskiopi',
    slika: Bioskiopi,
    id: 4,
  },
  {
    name: 'Kladionice',
    slika: Kladionice,
    id: 5,
  },
  {
    name: 'Biletarnice',
    slika: Biletarnice,
    id: 6,
  },
  {
    name: 'Farbare',
    slika: Farbare,
    id: 7,
  },
  {
    name: 'Pozorište',
    slika: Pozoriste,
    id: 8,
  },
  {
    name: 'Trafike',
    slika: Trafike,
    id: 9,
  },
  {
    name: 'Tehnika i računari',
    slika: TehnikaRacunari,
    id: 10,
  },
  {
    name: 'Butici',
    slika: Butici,
    id: 11,
  },
  {
    name: 'Saloni lepote',
    slika: SaloniLepote,
    id: 12,
  },
  {
    name: 'Operateri',
    slika: Operateri,
    id: 13,
  },
  {
    name: 'Knjižare',
    slika: Knjizare,
    id: 14,
  },
  {
    name: 'Optike',
    slika: Optike,
    id: 15,
  },
  {
    name: 'Zanatske radnje',
    slika: ZanatskeRadnje,
    id: 16,
  },
  {
    name: 'Pekare',
    slika: Pekare,
    id: 17,
  },
  {
    name: 'Muzeji',
    slika: Muzeji,
    id: 18,
  },
]
let name='Prodavnice i zabava';

class ShopFun extends React.Component{
  render() {
    return (
      <CategoriesBox
        array={array}
        name={name}
        justify='center'
        class={css.categorieBoxBody}/>
    )
  }
}
export default ShopFun;
