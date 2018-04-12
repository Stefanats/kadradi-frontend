import React from 'react';
import css from './styles/styles.scss';
import { connect } from 'react-redux';
import SelectFiltration from './selectFiltration';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import arrowDown from '../images/kadole.png';

@connect(state => ({ 
  filter: state.filter,
  countiesName: state.counties,
}))

@graphql(gql`
  query location {
  location {
    id
    name
    childAreas {
      id
      name
      lat
      lng
    }
  }
 } `,
  {
    options: (props) => {
      return ({
        variables: {
        }
      })
    },
  }
)

class WwListHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      blizuMene: true,
      radiSada: false,
      niz: [],
      display: false,
    }
  }
  blizuMene = () => {
    this.props.dispatch({
      type: "CLOSE_TOME",
      blizuMene: !this.state.blizuMene,
      radiSada: this.state.radiSada,
    });
    this.setState({
      blizuMene: !this.state.blizuMene,
    })
  }
  radiSada = () => {
    this.props.dispatch({
      type: "CLOSE_TOME",
      radiSada: !this.state.radiSada,
      blizuMene: this.state.blizuMene,
    });
    this.setState({
      radiSada: !this.state.radiSada,
    })
  }
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.data !== undefined) {
  //     this.setState({
  //       niz: nextProps.data.location[0].childAreas,
  //     })
  //   }
  // }
  // componentWillUnmount() {
  //   this.props.dispatch({
  //     type: "COUNTIES_NAME",
  //     name: "Opštine",
  //   });
  // }
  itemHandler = (item, e) => {
    e.stopPropagation();
    this.setState({
      display: false,
    })
    this.props.dispatch({
      type: "COUNTIES_NAME",
      name: item.name,
      id: item.id,
    });
    // console.log('izabrao', item.name)
  }
  render(){
    let imeOpstine = this.props.countiesName.name;
    let counties = this.state.niz.map((item, key) => {
      return(
        <div 
          // POZOVI FUNKCIJU KOJA KLIKCE NE IMENA OPSTINE I UPISI U REDUX NA KLIK
          onClick={(e) => this.itemHandler(item, e)}
          key={key}>
          {item.name}
        </div>
      )
    })

    return(
      <div className={css.wwListHeader}>
        <div 
          onClick={() => this.radiSada()} 
          className={!this.state.radiSada ? css.wwListOn : css.wwListOff}
          >Radi sada</div>
        <div
          onClick={() => this.blizuMene()}
          className={!this.state.blizuMene ? css.wwListOn : css.wwListOff}
          >Blizu mene</div>
          <div
            onClick={() => {this.setState({display: !this.state.display})}}
            className={css.counties}>
            <p>{imeOpstine}</p>
            <img src={arrowDown} width={15} alt='down arrow'/><p>{this.state.selectName}</p>
            <div 
              style={{display:`${this.state.display ? 'block' : 'none'}`}}
              className={css.countiesWrapper}>
              {counties}
            </div>
          </div>
        <div className={css.selectFiltration}>
          <SelectFiltration />
        </div>
      </div>
    )
  }
}
export default WwListHeader;