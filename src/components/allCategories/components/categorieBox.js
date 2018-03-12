import React from 'react';
import css from '../../styles/styles.scss';

const CategorieBox = (props) => {
  let categories = props.array.map((item, key) => {
    return(
      <div key={key} className={css.categorieBoxItemWrapper}>
        <div className={css.categorieBoxItem}>
          <img className={css.categorieBoxImg} src={item.slika}/>
          <p>{item.name}</p>
        </div>
      </div>
    )
  })
  return (
    <div className={css.categorieBox}>
      <div 
        style={{justifyContent: `${props.justify}`}}
        className={css.categorieBoxHeader}>
        <div className={css.categorieBoxContainer}>
          <p>{props.name}</p>
        </div>
      </div>
      <div className={props.class}>
          {categories}
      </div>
    </div>
  )
}
export default CategorieBox;
