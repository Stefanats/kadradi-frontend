import React from 'react';
import css from './styles/styles.scss';
import arrowDown from '../images/kadole.png';
import priceUp from '../images/cenaaan.png';
import priceDown from '../images/Cenaa.png';
import star from '../images/zvezdamala.png';
import letterA from '../images/slovoa.png';
import { connect } from 'react-redux';

@connect(state => ({ filter: state.filter }))

class SelectFiltration extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dropDown: 'none',
      selectName: 'Poređaj po',
    }
  }
  sendToRedux = (item) => {
    this.props.dispatch({
      type: "SEND_VALUE",
      value: item.value
    });
  }
  clickHandle = () => {
    this.setState({
      dropDown: this.state.dropDown === 'none' ? 'block' : 'none',
    })
  }
  itemClick = (item) => {
    this.setState({
      selectName: item.name,
    })
    this.sendToRedux(item);
  }
  render(){
    let array = [
      {
        name: 'Najbolje ocenjeno',
        img: star,
        value: 'ratingCount',
      },
      {
        name: 'ABC',
        img: letterA,
        value: 'alphabetical',
      },
      {
        name: 'Cena uzlazno',
        img: priceUp,
        value: 'priceUp',
      },
      {
        name: 'Cena silazno',
        img: priceDown,
        value: 'priceDown',
      }
    ]
    let dropDownItems = array.map((item, key) => {
      return(
        <div
          onClick={() => this.itemClick(item)}
          key={key}
          className={css.selectDropDownItem}>
          <div><img src={item.img} alt={item.name}/></div>
          <div><p>{item.name}</p></div>
        </div>
      )
    })
    return(
      // <select className={css.selectFiltration} onChange={this.one}>
      //   <option hidden>Poredjaj po</option>
      //   <option value='alphabetical' >Abc</option>
      //   <option value='priceUp'>Cena uzlazno</option>
      //   <option value='priceDown'>Cena silazno</option>
      //   <option value='ratingCount'>Najbolje ocenjeno</option>
      // </select>
      <div 
        onClick={() => this.clickHandle()}
        className={css.selectButton}>
        <img src={arrowDown} alt='down arrow'/><p>{this.state.selectName}</p>
        <div
          style={{display:`${this.state.dropDown}`}} 
          className={css.selectDropDown}>
          {dropDownItems}
        </div>
      </div>
    )
  }
}
export default SelectFiltration;