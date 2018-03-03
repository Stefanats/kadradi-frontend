import React from 'react';
import css from '../styles/styles.scss';
import Rating from 'react-rating';
import pun from '../../images/cena.png';
import prazan from '../../images/CEna1.png';

class ProfileInfo extends React.Component{
  render(){
    let objectCl = this.props.objectCl;
    let objectInfo = objectCl.objectInfo;
    console.log('telefoni', objectInfo)
    
    let phone = objectInfo.phone.map((item, key) => {
      return(
        <div key={key}>
          <h3>{item.desc}</h3>
          <p>{item.number}</p>
        </div>
      )
    })
    return(
      <div className={css.profileInformation}>
        <div className={css.profileInformationBox}>
          {
            !objectInfo.phone.length ? null :
            <div className={css.profileInformationPhone}>
              <p>{phone}</p>
            </div>
          }
          {
            objectInfo.popularBecauseOf == null ? null :
            <div className={css.profileInformationPopular}>
              <h3>Popularan zbog</h3>
              <p>{objectInfo.popularBecauseOf}</p>
            </div>
          }
          <div className={css.profileInformationPayingMethod}>
            <h3>Nacin placanja</h3>
            <p>Kes kartica</p>
          </div>
          {
            // da li treba ispitivanje?
            <div className={css.profileInformationPrice}>
              <p>Cena</p>
              <Rating
                readonly
                emptySymbol={
                  <img style={{width:'30px', marginRight:'2px'}}
                src={prazan}
                className="icon"/>}
                fullSymbol={
                  <img style={{width:'30px', marginRight:'2px'}}
                src={pun}
                className="icon"/>}
                stop={5}
                initialRating={objectCl.avgPrice}
              />
            </div>
          }
        </div>
        <div className={css.profileInformationBox}>
          <div className={css.profileInformationMore}>
            <h3>Dodatne informacije</h3>
            <p>Mini bar</p>
            <p>Svedski sto</p>
            <p>Room service</p>
          </div>
          {
            objectInfo.websiteUrl == null ? null :
            <div className={css.profileInformationLink}>
              <h3>Web site</h3>
              <p><a href={`${objectInfo.websiteUrl}`}>otvori web site</a></p>
            </div>
          }
        </div>
      </div>
    )
  }
}
export default ProfileInfo;
