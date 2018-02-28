import React from 'react';
import css from '../styles/styles.scss';
import radi from '../../images/RADI.png';
import neRadi from '../../images/NE-RADI.png';

class ObjectWorkTime extends React.Component{
  render(){
    // let restaurantColor = this.props.objectCl.restaurantTimeInfo.isWorking ? 'green' : 'red';
    // let kitchenColor = this.props.objectCl.kitchenTimeInfo.isWorking ? 'green' : 'red';
    // let deliveryColor = this.props.objectCl.deliveryTimeInfo.isWorking ? 'green' : 'red';
    return(
      <div>
        { 
          !this.props.hasRestaurant ? null : 
          <div className={css.objectWorkTime}>
            <div className={css.objectWorkTimeBox}> 
                <div className={css.restaurantWorkTime}>
                  <div className={css.restaurantWorkTimeBox}>
                    <h4 className={css.workTimeType}>
                      Restoran <img src={radi} style={{width:"20px"}}/>
                    </h4>
                    <p style={{fontSize:'20px',marginBottom:'5px'}}>(pon,petak 9.00-12.39)</p>
                    <p style={{fontSize:'20px'}}>(pon,petak 9.00-12.39)</p>
                  </div>
                </div>
              <div className={css.kitchenWorkTime}>
                <div className={css.kitchenWorkTimeBox}>
                  <h4 style={{color:'green', marginBottom:'10px'}}>
                    Kuhinja <img src={radi} style={{width:"20px"}}/>
                  </h4>
                  <p style={{marginBottom:'5px'}}>(pon,petak 9.00-12.39)</p>
                  <p>(pon,petak 9.00-12.39)</p>
                </div>
              </div>
              <div className={css.deliveryWorkTime}>
                <div className={css.deliveryWorkTimeBox}>
                  <h4 
                    style={{color:'red', marginBottom:'10px'}}>
                    Dostava <img src={neRadi} style={{width:"20px"}}/>
                  </h4>
                  <p style={{marginBottom:'5px'}}>(pon,petak 9.00-12.39)</p>
                  <p>(pon,petak 9.00-12.39)</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
export default ObjectWorkTime;
