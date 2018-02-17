import React from 'react';
import css from '../styles/styles.scss';

class ProfileInfo extends React.Component{
  render(){
    return(
      <div className={css.profileInformation}>
        <div className={css.profileInformationBox}>
          <div className={css.profileInformationPhone}>
            <h3>Telefon</h3>
            <p>011/2132-312</p>
          </div>  
          <div className={css.profileInformationPopular}>
            <h3>Popularan zbog</h3>
            <p>Prelepog pogleda na reku,nalazi u samom centu grada.</p>
          </div>
          <div className={css.profileInformationPayingMethod}>
            <h3>Nacin placanja</h3>
            <p>Kes kartica</p>
          </div>
          <div className={css.profileInformationPrice}>
            <p>Cena</p>
          </div>
        </div>
        <div className={css.profileInformationBox}>
          <div className={css.profileInformationMore}>
            <h3>Dodatne informacije</h3>
            <p>Mini bar</p>
            <p>Svedski sto</p>
            <p>Room service</p>
          </div>
          <div className={css.profileInformationLink}>
            <h3>Web site</h3>
            <p>otvori web site</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ProfileInfo;
