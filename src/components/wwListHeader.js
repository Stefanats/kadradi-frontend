import React from 'react';
import css from './styles/styles.scss';
import { connect } from 'react-redux';
import SelectFiltration from './selectFiltration';

@connect(state => ({ filter: state.filter }))

class WwListHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      class: false,
    }
  }
  one = (e) => {
    this.props.dispatch({
      type: "CLOSE_TOME",
      value: e,
    });
    this.setState({
      class: e,
    })
  }
  render(){
    return(
      <div className={css.wwListHeader}>
        <div 
          onClick={() => this.one(false)} 
          className={this.state.class ? css.wwListOn : css.wwListOff}
          >Radi sada</div>
        <div
          onClick={() => this.one(true)}
          className={this.state.class ? css.wwListOff : css.wwListOn}
          >Blizu mene</div>
        <div className={css.selectFiltration}>
          <SelectFiltration />
        </div>
      </div>
    )
  }
}
export default WwListHeader;