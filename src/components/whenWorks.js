import React from 'react';
import Map from './map';
import css from './styles/styles.scss';
import WhenWorksList from './whenWorksList';
import WhenWorksHeader from './whenWorksHeader';

let niz = ['apoteke', 'meljacnice', 'kafici', 'restorani', 'banke', 'jebarnici'];



class WhenWorks extends React.Component{

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
  render(){
    return(
      <div className={css.whenWorks}>
        <WhenWorksHeader />
        <div className={css.whenWorksBody}>
          <WhenWorksList />
          <Map />
        </div>
      </div>
    )
  }
}
export default WhenWorks;