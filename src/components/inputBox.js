import React from 'react';
import css from './styles/styles.scss';
import { history } from 'kit/lib/routing';

let niz = [
  {"name": "a"},
  {"name": "as"},
  {"name": "stefan"},
  {"name": "jagoda"},
  {"name": "zorana"},
  {"name": "ana"},
  {"name": "stefan"},
  {"name": "jagoda"},
  {"name": "zorana"},
  {"name": "ana"},
  {"name": "stefan"},
  {"name": "jagoda"},
  {"name": "zorana"},
  {"name": "ana"},
  {"name": "stefan"},
  {"name": "jagoda"},
  {"name": "zorana"},
  {"name": "ana"},
  {"name": "stefan"},
  {"name": "jagoda"},
  {"name": "zorana"},
  {"name": "ana"},
]

class InputBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      updatedlist: [],
    }
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
    let styles = {
      position: "absolute",
      display: `${this.state.focus}`,
      flexDirection: "column",
      top: 'calc(100% + 10px)',
      left: '50px',
      background: 'white',
      zIndex: "1000",
      boxShadow: '0 6px 12px rgba(0,0,0,.175)',
      border: '1px solid silver',
      borderRadius: '5px',
      overflowY: 'scroll',
      maxHeight: '300px',
    
    
    }
    let styleItem = {
      padding: '10px',
      background: 'white',
    }
    console.log('iz stejta', this.state.updatedlist)
    let dropDown = this.state.updatedlist.map((item, key) => {
      return(
        <div style={styleItem} key={key}>
          {item.name}
        </div>
      )
    })
    return(
      <div className={css.whatWhere}>
        <div className={css.whatWrapper}>
          <div style={styles}>
            {dropDown}
          </div>
          <div className={css.what}>Sta</div>
          <input
            onFocus={() => this.focusOn()}
            onBlur={() => this.focusOff()}
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

          {/* <datalist id="options">
            <select>
                <option value="option 1" />
                <option>option 2</option>
                <option value="option value 3">option label 3</option>
                <option value="option value 4" label="option label 4" />
                <option>aaaaaaaaabbbbbbbbbcccccccc</option>
                <option>aaaaaaaaabbbbb</option>
                <option>aaaaaaaa</option>
            </select>
          </datalist> */}