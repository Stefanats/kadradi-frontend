import React from 'react';
import css from './styles/styles.scss';
import Navigation from './navigation';
import DownStore from './downStore';
import Hamburger from './hamburger';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

@graphql(
  gql`
  mutation owningRequest($objectClId: Int!, $token: String!) {
    owningRequest(objectClId: $objectClId, token: $token) {
      success
      error
    }
  }`,
  {
    name: "addObject",
  }
)
class AddObject extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      phone:''
    }
  }
  validate = (e) => {
    e.preventDefault();
    if(this.state.email != '' && this.state.phone != ''){ 
      this.setState({
        errorMsg: ''
      })
    let numRegex = /^[0-9 -/+]*$/;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.state.email.match(emailRegex)){
      this.setState({
        emailError: ''
      })
    }else {
      this.setState({
        emailError: 'Unesite pravilan format e-mail-a!'
      })
    }
    if(this.state.phone.match(numRegex)){
      this.setState({
        numError: ''
      })
    }else {
      this.setState({
        numError: 'Možete uneti samo brojeve!'
      })
    }
    this.mutateObject();
    }else {
        this.setState({
          errorMsg: 'Popunite sva polja!'
        })
      }
  }
  change = (e) => {
    if(e.target.name === 'email')
      this.setState({
        email: e.target.value
      })
      
    if(e.target.name === 'phone')
    this.setState({
      phone: e.target.value
    })
  }
  mutateObject = async () => {
    let result = await this.props.addObject({
      variables: {
        objectClId: 3,
        token: 'blabla'
      }
    })
  }
  render(){

    console.log("ja sam mutacija", this.props)
    console.log('email',this.state.email)
    console.log('phone',this.state.phone)
    return(
      <div className={css.addObject}>
        	<div className={css.hamburgerWrapper}>
						<Hamburger />
					</div>
          <Navigation />
				  <DownStore />
        <div className={css.addObjectForm}>
          <div className={css.addYourObject}>
            <p>Dodaj kao svoj objekat</p>
          </div>
          <div className={css.formTextDiv}>
            <div style={{backgroundColor: 'gray',marginTop:'30px'}} className={css.isThisYourObject}>
              <p>Ovo je vaš posao?</p>
            </div>
            <div className={css.open}>
            <p style={{padding:'50px 0'}}>Pridružite se Open door zajednici!</p>
            <div style={{maxWidth:'800px'}}>
            <p style={{paddingBottom:'30px'}}>Otključajte funkcije ocena i utisaka, bio sam ovde ponuda i radnog vremena tokom praznika i još mnogo toga!</p>
            </div>
            </div>
          </div>
          <div className={css.emailNContact}>
            <p style={{maxWidth:'600px',padding:'70px 0 40px',textAlign:'center'}}>Ostavite nam e-mail i kontakt telefon i kontaktiraćemo Vas u najkraćem mogućem roku.</p>
            <label style={{fontSize:'18px'}}>E-mail</label>
            <input name='email' value={this.state.email} onChange={this.change} className={css.inputEmail}></input>
            <span style={{color:'red',fontSize:'18px',marginBottom:'15px'}}>{this.state.emailError}</span>
            <label style={{fontSize:'18px'}}>Kontakt telefon</label>
            <input name='phone' value={this.state.phone} onChange={this.change} className={css.inputEmail}></input>
            <span style={{color:'red',fontSize:'18px',marginBottom:'15px'}}>{this.state.numError}</span>
            <span style={{color:'red',fontSize:'20px',marginBottom:'15px'}}>{this.state.errorMsg}</span>
            <button onClick={e => this.validate(e)} className={css.inputButton}>Pošalji</button>
            
          </div>
        </div>
      </div>
    )
  }
}
export default AddObject;