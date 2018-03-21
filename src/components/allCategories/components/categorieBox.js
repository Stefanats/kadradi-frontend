import React from 'react';
import css from '../../styles/styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

@connect(state => ({ filter: state.filter }))

class CategorieBox extends React.Component {
  sendCategoriesId = (item) => {
    this.props.dispatch({
      type: "SEND_CATEGORIESID",
      value: item.id
    });
    console.log('IZ SENDA', item)
  }
  render(){
    let cssClass =
    this.props.cssClassThree ? 
    css.categorieBoxItemWrapperThree :
    css.categorieBoxItemWrapper
    let categories = this.props.array.map((item, key) => {
      return(
        <div onClick={() => this.sendCategoriesId(item)} key={key} className={cssClass}>
          <Link  to={`/view/${item.name.toLowerCase()}/${item.id}`}>
          <div className={css.categorieBoxItem}>
            <img className={css.categorieBoxImg} src={item.slika}/>
            <p>{item.name}</p>
          </div>
          </Link>
        </div>
      )
    })
    return (
      <div className={css.categorieBox}>
        <div 
          style={{justifyContent: `${this.props.justify}`}}
          className={css.categorieBoxHeader}>
          <div className={css.categorieBoxContainer}>
              <p>{this.props.name}</p>
          </div>
        </div>
        <div>
        <div 
          style={{width:'100%', margin: `${this.props.margin}`}}
          className={this.props.class}>
          {categories}
        </div>
        </div>
      </div>
    )
  }
}
export default CategorieBox;
