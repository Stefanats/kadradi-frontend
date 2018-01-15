import React from 'react';
import css from './styles/styles.scss';

class InputBox extends React.Component {
  render() {
    return(
      <div className={css.whatWhere}>
        <div className={css.whatWrapper}>
          <div className={css.what}>Sta</div>
          <input list="options" type="text" className={css.search} placeholder="Trazi Apoteke, Banke, Restorane i slicno..." />
        </div>
        <div className={css.whereWrapper}>
          <div className={css.where}>Gde</div>
          <input className={css.deoGrada} type="text" placeholder="Deo grada" />
          <input  className={css.submit} type="submit" value="Trazi" />
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