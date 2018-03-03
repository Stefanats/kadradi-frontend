import React from 'react';
import css from '../../styles/styles.scss';

const CategorieBox = (props) => {
  let categories = props.array.map((item, key) => {
    return(
      <div key={key} className={css.categorieBoxItemWrapper}>
        <div className={css.categorieBoxItem}>
          <img style={{width:'6vw',marginBottom:"10px"}} src={item.slika}/>
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
