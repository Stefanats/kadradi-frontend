import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

@graphql(gql`
  mutation verifyUser($emailHash: String!){
    verifyUser(emailHash: $emailHash){
      email
    }
  }
`,
  {
    name: 'verifyUser',
  }
)
class Verification extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
    }
  }
  callMutation = async () => {
    let hash = this.props.match.params.hash;
    let result = await this.props.verifyUser({
      variables: {
        emailHash: hash,
      }
    })
    if(result) {
      this.setState({
        email: result.data.verifyUser.email,
      })
    }
  }
componentDidMount(){
  this.callMutation();
}
  render(){
    return(
      <div style={{background:'#019f9f', display:'flex',height:'100vh',justifyContent:'center',alignItems:'center'}}>
        {
          this.state.email === '' ?
          <p style={{color:'#fff', fontSize:'22px', fontWeight:'600'}}>Niste se uspesno verifikovali!</p> :
          <p style={{color:'#fff', fontSize:'22px', fontWeight:'600'}}>Uspesno ste se verifikovali sa email-om: {this.state.email}</p>
        }
      </div>
    )
  }
}
export default Verification;
