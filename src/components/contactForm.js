import React from 'react';
import css from './styles/styles.scss';

class ContactForm extends React.Component{
  render(){
    return(
      <div>
        <div className={css.addObjectForm}>
          <div className={css.addYourObject}>
            <p>Dodaj kao svoj objekat</p>
          </div>
          <div className={css.formTextDiv}>
            <div style={{backgroundColor: 'gray',marginTop:'30px'}} className={css.isThisYourObject}>
              <p>Ovo je vas posao?</p>
            </div>
            <div className={css.aa}>
            <p style={{padding:'50px 0'}}>Pridruzite se Open door zajednici!</p>
            <div style={{maxWidth:'800px'}}>
            <p style={{paddingBottom:'30px'}}>Otkljucajte funkcije ocena i utisaka, bio sam ovde ponuda i radnog vremena tokom praznika i jos mnogo toga!</p>
            </div>
            </div>
          </div>
          <div className={css.emailNContact}>
            <p style={{maxWidth:'600px',padding:'70px 0 40px',textAlign:'center'}}>Ostavite nam e-mail i kontakt telefon i kontaktiracemo Vas u najkracemo mogucem roku.</p>
            <label style={{fontSize:'18px'}}>E-mail</label>
            <input className={css.inputEmail}></input>
            <label style={{fontSize:'18px'}}>Kontakt telefon</label>
            <input className={css.inputEmail}></input>
            <button className={css.inputButton}>Posalji</button>
          </div>
        </div>
      </div>
    )
  }
}
export default ContactForm;