import React from 'react';
import css from '../styles/styles.scss';
import Rating from 'react-rating';
import pun from '../../images/dolar.png';
import prazan from '../../images/dolar1.png';

class ProfileInfo extends React.Component{
  render(){
    let objectCl = this.props.objectCl;
    let objectInfo = objectCl.objectInfo;
    
    let phone = objectInfo.phone.map((item, key) => {
      return(
        <div key={key}>
          <p><a className={css.disablePhone} href={`tel:${item.number}`}>{item.number}</a></p>
        </div>
      )
    })
    return(
      <div className={css.profileInformation}>
        <div className={css.profileInformationBox}>
          {
            !objectInfo.phone.length ? null :
            <div className={css.profileInformationPhone}>
              <h3>Telefon</h3>
              <div>{phone}</div>
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
              <h3>Cena</h3>
              <Rating
                readonly
                emptySymbol={
                  <img
                src={prazan}
                className={"icon"+" "+css.dolarIcon}/>}
                fullSymbol={
                  <img 
                src={pun}
                className={"icon"+" "+css.dolarIcon}/>}
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
              <p><a href={`${objectInfo.websiteUrl}`}>Otvori web site</a></p>
            </div>
          }
        </div>
      </div>
    )
  }
}
export default ProfileInfo;
