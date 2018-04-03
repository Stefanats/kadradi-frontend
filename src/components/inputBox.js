import React from 'react';
import css from './styles/styles.scss';
import { history } from 'kit/lib/routing';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { BeatLoader } from 'react-spinners';

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
class InputBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: false,
      object: false,
      objectsArray: [],
      categoryArray: [],
      categoryId: '',
      inputValue: '',
      sendName: '',
      sendValue: '',
      objectCategory: '',
    }
  }
  updateList = async (event) => {
    this.setState({
      inputValue: event.target.value,
    })
    await this.props.data.refetch({
      name: event.target.value,
    })
    let {categoriesByName} = this.props.data || [];
    categoriesByName == undefined ? null :
    categoriesByName.length == 0 ?
    this.setState({
      categoryArray: []
    }) :
    this.setState({
      categoryArray: categoriesByName 
    })
    let {objectsByName} = this.props.data || [];
    objectsByName == undefined ? null :
    objectsByName.length == 0 ? 
    this.setState({
      objectsArray: []
    }) :
    this.setState({
      objectsArray: objectsByName,
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
  updateCounties = item => {
  }
  search(){
    this.state.object ?
    history.push(`/profile/${this.state.sendName}/${this.state.sendValue}`):
    this.state.category ?
    history.push(`/view/${this.state.sendName}/${this.state.sendValue}`) :
    console.log('molimo vas oznacite nesto')
  }
  render() {
    console.log('LOADING', this.props.data.loading)
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
      <div className={css.whatWhere}>
        <div className={css.whatWrapper}>
          {
            this.props.data.loading ? <div style={{position:'absolute',right:'5px',
            display:'flex',height:'100%',alignItems:'center'}}>
              <BeatLoader color={'red'} size={10} />
            </div> :
            <div 
              style={{display: `${this.state.objectsArray.length == 0 &&
                                  this.state.categoryArray.length == 0 ? 'none' : 'flex'}`}}
              className={css.dropDownWrapper}>
                {dropDown}
            </div>
          }
          <div className={css.what}>Sta</div>
          <input
            value={this.state.inputValue}
            onChange={(event) => this.updateList(event)}
            type="text"
            className={css.search}
            placeholder="Trazi Apoteke, Banke, Restorane i slicno..." />
        </div>
        <div className={css.whereWrapper}>
          <div className={css.where}>Gde</div>
          <input 
            onChange={(event) => this.updateCounties(event)}
            className={css.deoGrada} 
            type="text" 
            placeholder="Deo grada"/>
          <div
            onClick={() => this.search()}
            className={css.submit}>
            <p>Traži</p>
            </div>
        </div>
      </div>
    )
  }
}
export default InputBox;
