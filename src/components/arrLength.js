import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({ 
  arrayCount: state.arrayCount,
}))

class ArrLength extends React.Component{
  componentWillReceiveProps(nextProps) {
    console.log('IZ ARR', nextProps)
    if(nextProps.stefan !== undefined) {
      this.props.dispatch({
        type: "ARRAY_COUNT",
        value: nextProps.stefan,
      });
    }
  }
  render() {
    return(
      <div>
      </div>
    )
  }
}
export default ArrLength;
