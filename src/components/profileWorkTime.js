import React from 'react';
import css from './styles/styles.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
// dumps
import ProfileWorkClock from './dumpComponents/profileWorkTimeClock';
import ObjectWorkTime from './dumpComponents/objectWorkTime';
import ProfileCalendar from './dumpComponents/profileCalendar';
import ProfileInfo from './dumpComponents/profileInfo';
import ProfileMap from './dumpComponents/profileMap';

@graphql(gql`
  query objectCl($id: Int){
    objectCl(id: $id){
      objectInfo{
        hasRestaurant
      }
      verified
      workingTimeInfo{
        isWorking
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

class ProfileWorkTime extends React.Component{
  render(){
    let result = this.props.data.objectCl || [];
    let [objectCl] = result;
    return(
      <div>
        {
          this.props.data.loadin ?
          <p style={{color:'red',fontSize:'50px'}}>loading</p> :
          objectCl == undefined ? '' :
        <div>
        <div className={css.profileWorkTimeFirst}>
          <div className={css.profileWorkTimeFirstBox}>
            <p>Radno vreme i praznici</p>
          </div>
        </div>
        <div className={css.profileWorkTimeSecond}>
          <ProfileWorkClock 
          isWorking={objectCl.workingTimeInfo.isWorking}
          verified={objectCl.verified}/>
          <ObjectWorkTime
            objectCl={objectCl}
            hasRestaurant={objectCl.objectInfo.hasRestaurant}
          />
          <ProfileCalendar />
        </div>
        <div className={css.profileWorkTimeThirth}>
          <ProfileInfo />
          <ProfileMap />
        </div>
        </div>
        }
      </div>
    )
  }
}
export default withRouter(ProfileWorkTime);
