import React from 'react';
import css from './styles/styles.scss';
import { history } from 'kit/lib/routing';
import FaSearch from 'react-icons/lib/fa/search';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

@graphql(gql`
 query
  objectsByName($name: String!) {
    objectsByName(name: $name){
      name
      id
      objectCategoryId
      objectCategory{
        name
      }
      tags
    }
    categoriesByName(name: $name){
      id
      name
    }
  }`,
  {
    options: (props) => {
      return ({
        variables: {
          name: ''
        }
      })
    },
  }
)
class WhenWorksInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: false,
      object: false,
      objectsArray: [],
      categoryArray: [],
      inputValue: '',
      sendValue: '',
      sendName: '',
    }
  }
  updateList = async (event) => {
    this.setState({
      inputValue: event.target.value,
    })
    await this.props.data.refetch({
      name: event.target.value,
    })
    let {objectsByName, categoriesByName} = this.props.data || [];
    objectsByName == undefined ? null :
    objectsByName.length == 0 ? 
    this.setState({
      objectsArray: []
    }) :
    this.setState({
      objectsArray: objectsByName,
    })
    categoriesByName == undefined ? null :
    categoriesByName.length == 0 ?
    this.setState({
      categoryArray: []
    }) :
    this.setState({
      categoryArray: categoriesByName 
    })    
  }
  onSelectObject(item){
    this.setState({
      category: false,
      object: true,
      objectsArray: [],
      categoryArray: [],
      inputValue: item.name,
      sendValue: item.id,
      sendName: item.name,
    })
  }
  onSelectCategory(item){
    this.setState({
      category: true,
      object: false,
      objectsArray: [],
      categoryArray: [],
      inputValue: item.name,
      sendValue: item.id,
      sendName: item.name,
    })
    this.search();
  }
  search(item, broj){
    broj === 1 ?
    history.push(`/profile/${item.name}/${item.id}`):
    broj === 2 ?
    history.push(`/view/${item.name}/${item.id}`) :
    console.log('molimo vas oznacite nesto')
    this.setState({
      category: false,
      object: false,
      objectsArray: [],
      categoryArray: [],
      inputValue: '',
      sendValue: '',
      sendName: '',
    })

  }
  render(){

    let dropDownObjects = this.state.objectsArray.map((item, key) => {
      return(
        <div 
          onClick={() => this.search(item, 1)}
          className={css.dropDownItemTwo}
          key={key}>
            {item.name}
        </div>
      )
    })
    let dropDownCategory = this.state.categoryArray.map((item, key) => {
      return(
        <div 
          onClick={() => this.search(item, 2)}
          className={css.dropDownItemTwo}
          key={key+'a'}>
            {item.name}
        </div>
      )
    })

    let dropDown = dropDownObjects.concat(dropDownCategory);
    return(
      <div className={css.whenWorksInputWrapper}>

        <div className={css.whenWorksInputHolder}>
          <input
            onChange={(event) => this.updateList(event)}
            value={this.state.inputValue}
            placeholder="Trazi Apoteke, Banke i slicno..."
            className={css.whenWorksInput} />
          {/* <div
            onClick={()=> this.search()}
            className={css.whenWorksButton}>
              <FaSearch/> <p>Trazi</p>
          </div> */}
        </div>
        <div className={css.dropDownWrapperTwo}>
          {dropDown}
        </div>
      </div>
    )
  }
}
export default WhenWorksInput;
