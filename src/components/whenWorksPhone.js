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
        <WhenWorksHeader />
        <div className={css.jebote}>
          <div className={this.state.opacity ? css.listWrapperOne : css.listWrapperTwo}>
            <WhenWorksList />
          </div>
          <div  className={this.state.opacity ? css.mapWrapperOne : css.mapWrapperTwo}>
            <GoogleMap css='map' />
          </div>
        </div>
        <div 
          onClick={()=>this.andler(true)}
          style={{
            position:'fixed',
            borderRadius:'10px',
            height:'40px',
            width:'80px',
            backgroundColor:'red',
            bottom:'20px',
            left:'50%',
            zIndex:'2'}}>
        </div>
        <div 
          onClick={()=>this.andler(false)}
          style={{
              position:'fixed',
              borderRadius:'10px',
              height:'40px',
              width:'80px',
              backgroundColor:'blue',
              bottom: '20px',
              left:'25%',
              zIndex:'2'}}>
        </div>
      </div>
    )
  }
}
export default WhenWorksPhone;
