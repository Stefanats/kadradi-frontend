import React from 'react';
import css from '../../styles/styles.scss';

const CategorieBox = (props) => {
  let cssClass =
  props.cssClassThree ? 
  css.categorieBoxItemWrapperThree :
  css.categorieBoxItemWrapper
  let categories = props.array.map((item, key) => {
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
      <div 
        style={{justifyContent: `${props.justify}`}}
        className={css.categorieBoxHeader}>
        <div className={css.categorieBoxContainer}>
            <p>{props.name}</p>
        </div>
      </div>
      <div>
      <div 
        style={{width:'100%', margin: `${props.margin}`}}
        className={props.class}>
        {categories}
      </div>
      </div>
    </div>
  )
}
export default CategorieBox;
