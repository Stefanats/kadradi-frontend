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
  }
  search(){
    this.state.object ?
    history.push(`/profile/${this.state.sendName}/${this.state.sendValue}`):
    this.state.category ?
    history.push(`/view/${this.state.sendName}/${this.state.sendValue}`) :
    console.log('molimo vas oznacite nesto')
  }
  render(){
    console.log('ssdadasd1', this.state.categoryArray)
    console.log('object', this.state.objectsArray)

    let dropDownObjects = this.state.objectsArray.map((item, key) => {
      return(
        <div 
          onClick={() => this.onSelectObject(item)}
          className={css.dropDownItem}
          key={key}>
            {item.name}
        </div>
      )
    })
    let dropDownCategory = this.state.categoryArray.map((item, key) => {
      return(
        <div 
          onClick={() => this.onSelectCategory(item)}
          className={css.dropDownItem}
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
          <div
            onClick={()=> this.search()}
            className={css.whenWorksButton}>
              <FaSearch/> 
              <p>Trazi</p>
          </div>
        </div>
        <div className={css.dropDownWrapper}>
          {dropDown}
        </div>
      </div>
    )
  }
}
export default WhenWorksInput;