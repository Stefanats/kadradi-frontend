import React from 'react';
import css from './styles/styles.scss';
import WhenWorksHeader from './whenWorksHeader';

class ObjectProfile extends React.Component{
  render(){
    console.log('props', this.props)
    return(
      <div>
        <WhenWorksHeader />
        {this.props.location.pathname}
      </div>
    )
  }
}
export default ObjectProfile;