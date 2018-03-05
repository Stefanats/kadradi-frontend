import React from 'react';
import css from '../../styles/styles.scss';

const CategorieBox = (props) => {
  let categories = props.array.map((item, key) => {
    let cssClass = props.cssClassThree ?
      css.categorieBoxItemWrapperThree :
      css.categorieBoxItemWrapper;
    return(
      <div key={key} className={cssClass}>
        <div className={css.categorieBoxItem}>
          <img className={css.categorieBoxImg} src={item.slika}/>
          <p>{item.name}</p>
        </div>
      </div>
    )
  })
  return (
    <div className={css.categorieBox}>
      <div className={css.categorieBoxHeader}>
        <p>{props.name}</p>
      </div>
      <div className={css.categorieBoxBody}>
        {categories}
      </div>
    </div>
  )
}
export default CategorieBox;
