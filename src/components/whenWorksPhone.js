import React from 'react';
import css from './styles/styles.scss';
import WhenWorksList from './whenWorksList';
import GoogleMap from './map';
import { relative } from 'path';
import WhenWorksHeader from './whenWorksHeader'; 

class WhenWorksPhone extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      opacity: true,
    }
  }
  andler(e){
    this.setState({
      opacity: e,
    })
  }
  render(){
    return(
      <div className={css.whenWorksPhone}>
      {/* <WhenWorksHeader /> */}
        <div className={css.jebote}>
          <div className={this.state.opacity ? css.jedan : css.jedann}>
            <WhenWorksList />
          </div>
          <div  className={this.state.opacity ? css.dva : css.dvaa}>
            <GoogleMap css='map' />
          </div>
        </div>
        <div onClick={()=>this.andler(true)} style={{position:'absolute',borderRadius:'10px',height:'40px',width:'80px',backgroundColor:'red',top:'80vh',left:'50%',zIndex:'2'}}></div>
        <div onClick={()=>this.andler(false)} style={{position:'absolute',borderRadius:'10px',height:'40px',width:'80px',backgroundColor:'blue',top:'80vh',left:'25%',zIndex:'2'}}></div>
      </div>
    )
  }
}
export default WhenWorksPhone;
