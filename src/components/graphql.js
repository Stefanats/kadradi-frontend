// Now, let's create a GraphQL-enabled component...

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed

// ----------------------
// IMPORTS

/* NPM */

import React from 'react';
import PropTypes from 'prop-types';

// GraphQL
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

/* App */

// GraphQL queries.  Looking at this file demonstrates how to import fragments.
// Webpack will compile this into inline GraphQL for us, so we can pass the
// query to components using the @graphql decorator
import allMessages from 'src/graphql/queries/all_messages.gql';

// ----------------------

// Since this component needs to 'listen' to GraphQL data, we wrap it in
// `react-apollo`'s `graphql` HOC/decorator and pass in the query that this
// component requires.   Note: This is not to be confused with the `graphql`
// lib, which is used on the server-side to initially define the schema
@graphql(gql`
query people {
  people {
    firstName,
    lastName,
    email
  }
}`
)

@graphql(gql`
mutation updateOrCreateUser($email: String, $firstName: String, $lastName: String){
  updateOrCreateUser(email: $email, firstName: $firstName, lastName: $lastName) {
    id
  }
}`,
{
  name: "updateOrCreateUser"
}
)

export default class GraphQLMessage extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      email: null,
      firstName: null,
      lastName: null
    }
  }
  static propTypes = {
    data: PropTypes.shape({
      people: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
      }),
    }),
  }

  static defaultProps = {
    data: {
      people: {
        firstName: null,
        lastName: null
      },
    },
  }
  sendForm = async (e) => {
    e.preventDefault();
    e.target.reset();
    await this.props.updateOrCreateUser({
      variables: {
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      }
    });
    // this.setState({
    //   email: null,
    //   firstName: null,
    //   lastName: null
    // })
  }
  setForm(e){
    console.log('sub si', this.refs.email.value);
    let that = this.refs;
    e.preventDefault();
    this.setState({
      email: that.email.value,
      firstName: that.firstName.value,
      lastName: that.lastName.value
    })
    
  }
  render() {
    console.log('jebeni state', this.state)
    const { data } = this.props;
    // Since we're dealing with async GraphQL data, we defend against the
    // data not yet being loaded by checking to see that we have the `message`
    // // key on our returned object
    // const message = data.people && data.people.map((item, id)=>{
    //   return <div key={id}> Name: {item.firstName} Lname: {item.lastName} Email: {item.email}</div>
    // });
    

    // Apollo will tell us whether we're still loading.  We can also use this
    // // check to ensure we have a fully returned response
    // const isLoading = data.loading ? 'yes' : 'nope';
    return (
      <div>
        <form onSubmit={(e) =>this.sendForm(e)}  onChange={(e)=>this.setForm(e)}>
          <input type="text" ref="email" />
          <input type="text" ref="firstName" />
          <input type="text" ref="lastName" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
