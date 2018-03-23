import React from 'react';
import GoogleMap from './map';
import css from './styles/styles.scss';
import WhenWorksList from './whenWorksList';
import WhenWorksHeader from './whenWorksHeader';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import { setTimeout } from 'timers';
import { connect } from 'react-redux';
import WhenWorksPhone from './whenWorksPhone';
import map from '../images/mapa.png';
import list from '../images/lista.png';
import DownStore from './downStore';

class WhenWorks extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      opacity: true
    }
  }
  andler(e){
    this.setState({
      opacity: e,
    })
  }
  render(){
    return(
      <div className={css.whenWorks}>
        <div className={css.downStoreWW}>
					<DownStore />
        </div>
          <WhenWorksHeader />
          <div className={css.whenWorksBody}>
            <div
              style={{left:`${this.state.opacity ? '0' : '-100%'}`}}
              className={css.listWrapperOne}>
              <WhenWorksList {...this.props}/>
            </div>
            <div
              style={{left:`${this.state.opacity ? '100%' : '0'}`}} className={css.mapWrapperOne}>
              <GoogleMap {...this.props} css='map' />
            </div>
          </div>
        <div 
          className={css.mapButtons}
          onClick={()=>this.andler(false)}
          style={{
            cursor:'pointer',
            position:'fixed',
            bottom:'20px',
            left:'50%',
            zIndex:'2'}}>
            <img width={75} src={map} alt='map image'/>
        </div>
        <div 
          className={css.mapButtons}
          onClick={()=>this.andler(true)}
          style={{
              cursor:'pointer',
              position:'fixed',
              bottom: '20px',
              transform: 'translate(-100%, 0)',
              left:'50%',
              zIndex:'2'}}>
            <img width={75} src={list} alt='list image'/>
        </div>
      </div>
    )
  }
}
export default WhenWorks;
