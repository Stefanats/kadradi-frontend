import React from 'react';
import css from './styles/styles.scss';
import { connect } from 'react-redux';
import SelectFiltration from './selectFiltration';

@connect(state => ({ filter: state.filter }))

class WwListHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      blizuMene: true,
      radiSada: false,
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
  render(){
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
        <div className={css.selectFiltration}>
          <SelectFiltration />
        </div>
      </div>
    )
  }
}
export default WwListHeader;