import React from 'react';
import css from './styles/styles.scss';
import DownStore from './downStore';
import Navigation from './navigation';
import Hamburger from './hamburger';
import ReactTransitionGroup from 'react-addons-transition-group'
import { setTimeout } from 'timers';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

@graphql(gql`
  query objectCl($id: Int) {
    objectCl(id: $id) {
      name
      avgRating
      ratingCount
    }
  }`, 
  { 
    options: (props) => {
      return ({
        variables: {
          id: 1
        }
      })
    }
  }
)

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      left: true,
      display: true
    }
  }
  click(){
    this.setState({
      display: !this.state.display
    })
    setTimeout(
        this.setState({
          display: !this.state.display
        }), 1000
    )
  }
  render(){
    let result = this.props.data.objectCl || [];
    let [objectCl] = result;

    let stylez = {
      width: '100px',
      height: '100px',
      position: 'relative',
      background: 'red',
      overflow: 'hidden'
    }
    let stajl = {
      left: `${this.state.top ? '50px' : '50px'}`,
      height: '100px',
      transition: '1s',
      width: '100px',
      background: 'yellow',
      position: 'relative',
      display: `${this.state.display ? 'block' : 'none'}`
    }
    let stajll = {
      right: '50%',
      height: '100px',
      width: '100px',
      background: 'green',
      position: 'relative'
    }
    return(
      <div>
      { 
        objectCl == undefined ? null :
      <div className={css.about}>
        <Hamburger />
        <Navigation />
        <DownStore />
        <div style={{color:'white',fontSize:'30px'}}>{objectCl.avgRating}</div>
        <div style={stylez}>
            <div style={stajl}>

            </div>
        </div>
        <div onClick={()=> this.click()}>
          click
        </div>
      </div>
    }
      </div>
    )
  }
}
export default About;