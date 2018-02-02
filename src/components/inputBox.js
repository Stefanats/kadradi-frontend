import React from 'react';
import css from './styles/styles.scss';
import { history } from 'kit/lib/routing';

let niz = [
  {"name": "Lilly apoteke"},
  {"name": "Gradska apoteka"},
  {"name": "Lukina apoteka"},
  {"name": "Bakijeva apoteka"},
  {"name": "Bajina apoteka"},
  {"name": "Stevina apoteka"},
  {"name": "Sanetova apoteka"},
  {"name": "Elvisova apoteka"},
  {"name": "Cicina apoteka"},
  {"name": "Jelenina apoteka"},
]

class InputBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      updatedlist: [],
    }
  }
  sane(item){
    console.log("SANEEEEEE", item.name)
  }
  search(){
    history.push('/profile/123');
  }
  focusOn(){
    this.setState({
      focus: 'flex'
    })
  }
  focusOff(){
    this.setState({
      focus: 'none'
    })
  }
  componentWillMount(){
    this.setState({items: niz})
  }
  updateList(event) {
    let oldList = niz;
    oldList = oldList.filter((item) => {
       return item.name.search(event.target.value) !== -1 
    })
    this.setState({
      updatedlist: oldList,
      focus: 'flex'
    })
  }
  render() {
    let dropDown = this.state.updatedlist.map((item, key) => {
      return(
        <div 
          onClick={() => this.sane(item)}
          className={css.dropDownItem}
          key={key}>
            {item.name}
        </div>
      )
    })
    return(
      <div className={css.whatWhere}>
        <div className={css.whatWrapper}>
          <div 
            style={{display: `${this.state.focus}`}}
            className={css.dropDownWrapper}>
              {dropDown}
          </div>
          <div className={css.what}>Sta</div>
          <input
            onFocus={() => this.focusOn()}
            onChange={(event) => this.updateList(event)}
            type="text"
            className={css.search}
            placeholder="Trazi Apoteke, Banke, Restorane i slicno..." />
        </div>
        <div className={css.whereWrapper}>
          <div className={css.where}>Gde</div>
          <input 
            className={css.deoGrada} 
            type="text" 
            placeholder="Deo grada" />
          <input
            onClick={() => this.search()}
            className={css.submit} 
            type="submit" 
            value="Trazi" />
        </div>
      </div>
    )
  }
}
export default InputBox;
