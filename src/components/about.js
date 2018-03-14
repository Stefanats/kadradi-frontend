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
      display: true,
      height: true,
      view: true,
    }
  }
  click(){
    this.setState({
      height: !this.state.height,
      view: !this.state.view,

    })
  }
  render(){
    let result = this.props.data.objectCl || [];
    let [objectCl] = result;

    let stylez = {
      display: 'flex',
      minHeight: `${this.state.height ? '100px' : '200px'}`,
      position: 'relative',
      background: 'red',
      overflow: 'hidden',
      transition: '500ms',
    }
    let stajl = {
      bottom: `${this.state.view ? '100%' : '0'}`,
      left: 0,
      height: '200px',
      width: '100px',
      background: 'yellow',
      position: 'absolute',
      transition: '500ms',
    }
    let stajll = {
      top: `${!this.state.view ? '100%' : '0'}`,
      left: 0,
      height: '100px',
      width: '100px',
      background: 'green',
      position: 'absolute',
      transition: '500ms',
    }
    let klik = {

    }
    return(
      <div>
      { 
        objectCl == undefined ? null :
      <div className={css.about}>
        <Hamburger />
        <Navigation />
        <DownStore />
        <div style={{width:'300px'}}>
        <div style={stylez}>
            <div style={stajl}>

            </div>
            <div style={stajll}>
            </div>
        </div>
        </div>
        <div onClick={()=>this.click()} style={klik}>
          click
        </div>
      </div>
    }
      </div>
    )
  }
}
export default About;