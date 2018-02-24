import React from 'react';
import GoogleMap from './map';
import css from './styles/styles.scss';
import WhenWorksList from './whenWorksList';
import WhenWorksHeader from './whenWorksHeader';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import { setTimeout } from 'timers';


import { connect } from 'react-redux';

let niz = ['apoteke', 'meljacnice', 'kafici', 'restorani', 'banke', 'dsadsadaa'];




class WhenWorks extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        broj: 1,
        klasa: css.whenWorksBodyMiddleR,
        click: 'auto'
      }
  }
//   render(){
//     console.log('adsa', this.props.location.pathname.substring(6))
//     if(niz.indexOf(this.props.location.pathname.substring(6)) > -1){
//       return(
//         <div>
//           <h1>{this.props.location.pathname.substring(6)}</h1>
//         </div>
//         )
//       }else{
//       return history.push('/home')
//     }
//   }
// }

  clickHanderRight(){
    this.setState({
      broj: this.state.broj + 1,
      klasa: this.state.broj == 0 ? css.whenWorksBodyMiddleR : this.state.broj == 1 ?css.whenWorksBodyLeft : null,
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
      klasa: this.state.broj == 2 ? css.whenWorksBodyMiddleL : this.state.broj == 1 ?css.whenWorksBodyRight : null,
      click: 'none'
    })
    setTimeout(() => {
      this.setState({click: 'auto'});
    }, 1000)
  }
  render(){

    return(
      <div className={css.whenWorks}>
        <WhenWorksHeader />
        <div className={this.state.klasa}>
          <div className={css.leftHolder}>
            <WhenWorksList />
            <div style={{pointerEvents:`${this.state.click}`}} onClick={() => this.clickHandlerLeft()} className={css.leftArrow}>
              <div>
                <FaAngleLeft />
              </div>
            </div>
          </div>
          <div  style={{overflow:"hidden"}}  className={css.rightHolder}>
            <GoogleMap css='map' />
            <div style={{pointerEvents:`${this.state.click}`}} onClick={()=> this.clickHanderRight()} className={css.rightArrow}>
              <div>
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WhenWorks;