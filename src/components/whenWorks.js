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

class WhenWorks extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        broj: 1,
        klasa: css.whenWorksBodyMiddleR,
        click: 'auto'
      }
  }

  clickHanderRight(){
    this.setState({
      broj: this.state.broj + 1,
      klasa: this.state.broj == 0 ?
      css.whenWorksBodyMiddleR :
      this.state.broj == 1 ?
      css.whenWorksBodyLeft : null,
      click: 'none'
    })
    setTimeout(() => {
      this.setState({click: 'auto'});
    }, 1000)
  }
  proba(){
    this.forceUpdate();
  }
  clickHandlerLeft(){
    this.setState({
      broj: this.state.broj - 1,
      klasa: this.state.broj == 2 ?
      css.whenWorksBodyMiddleL :
      this.state.broj == 1 ? 
      css.whenWorksBodyRight : null,
      click: 'none'
    })
    setTimeout(() => {
      this.setState({click: 'auto'});
    }, 1000)
  }
  render(){
    console.log('whenworks', this.props)
    return(
      <div className={css.whenWorks}>
          <WhenWorksHeader />
          <div className={this.state.klasa}>
            <div className={css.leftHolder}>
              <WhenWorksList />
              {/* <div 
                style={{pointerEvents:`${this.state.click}`}}
                onClick={() => this.clickHandlerLeft()}
                className={css.leftArrow}>
                <div>
                  <FaAngleLeft />
                </div>
              </div> */}
            </div>
            <div  style={{overflow:"hidden"}}  className={css.rightHolder}>
              <GoogleMap css='map' />
              {/* <div 
                style={{pointerEvents:`${this.state.click}`}}
                onClick={()=> this.clickHanderRight()}
                className={css.rightArrow}>
                <div>
                  <FaAngleRight />
                </div>
              </div> */}
            </div>
          </div>
        {/* // <WhenWorksPhone /> */}
      </div>
    )
  }
}
export default WhenWorks;
