import React from 'react';
import css from './styles/styles.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router'

let stajl = {
  display: "flex",
  height: "50vh",
  overflow: "hidden",
  position: "relative",
}
let stylez = {
  width: "100%",
  heigth: "100%",
  position: 'absolute',
  transform: "translate(-50%,-50%)",
  top: '50%',
  left: '50%',
}


@graphql(gql`
  query objectCl($id: Int){
    objectCl(id: $id){
      images{
        profileImage {
          fileUrl
        }
      }
    }
  }`,
  {
    options: (props) => {
      return ({
        variables: {
          id: parseInt(props.match.params.id),
        }
      })
    },
  }
)

class ProfileHome extends React.Component{
  render(){
    let result = this.props.data.objectCl || [];
    let [objectCl] = result;
    return(
      <div style={stajl}>
        {
          this.props.data.loading ? '' : 
          <img style={stylez} src={objectCl.images.profileImage.fileUrl}/>
        }
      </div>
    )
  }
}
export default withRouter(ProfileHome);
