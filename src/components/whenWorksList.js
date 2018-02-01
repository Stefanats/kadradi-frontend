import React from 'react';
import css from './styles/styles.scss';
import WwListHeader from './wwListHeader';
import ObjectCard from './objectCard';


class WhenWorksList extends React.Component{


  render(){
    return(
      <div className={css.whenWorksList}>
        <WwListHeader />
        <ObjectCard />
      </div>
    )
  }
}
export default WhenWorksList;