import React from 'react';
import css from './styles/styles.scss';
import DownStore from './downStore';
import Navigation from './navigation';
import Hamburger from './hamburger';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class One extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pozicija: true
    }
  }
  componentWillMount(){
    setTimeout(() => {
      this.setState({
        pozicija: false,
      })
    }, 1);
  }
  componentWillUnmount(){
      this.setState({
        pozicija: true,
      })
  }
  render(){
    return(
      <div style={{position:'relative',left:`${this.state.pozicija ? '-100%' : '0'}`,height:'500px',width:'100px',background:'red',transition:'400ms'}}>

      </div>
    )
  }
}
class Two extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pozicija: true
    }
  }
  componentWillMount(){
    setTimeout(() => {
      this.setState({
        pozicija: false,
      })
    }, 1);
  }
  componentWillUnmount(){
      this.setState({
        pozicija: true,
      })
  }
  render(){
    return(
      <div style={{position:'relative',left:`${this.state.pozicija ? '-100%' : '0'}`,height:'100px',width:'100px',background:'green',transition:'400ms'}}>

      </div>
    )
  }
}

class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      proba: true,
    }
  }
  klik = () => {
    this.setState({
      proba: !this.state.proba,
    })
  }
  render(){
    let roditelj = {
      
    }
    return(
      <div>
        <div style={roditelj}>
          {
            this.state.proba ?
            <One/> :
            <Two/>
          }
        </div>
        <button onClick={()=>this.klik()}>dugme</button>
      </div>
    )
  }
}
export default About;