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
      objectLocations{
        address
        city
      }
      avgPrice
      objectInfo{
        phone {
          desc
          number
        }
        popularBecauseOf
        additionalInfo
        websiteUrl
      }
      verified
      workingTimeInfo{
        isWorking
      }
      sectorTimeInfo {
        name
        isWorking
        monday {
          opening
          closing
        }
        tuesday {
          opening
          closing
        }
        wednesday {
          opening
          closing
        }
        thursday {
          opening
          closing
        }
        friday {
          opening
          closing
        }
        saturday {
          opening
          closing
        }
        sunday {
          opening
          closing
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

class ProfileWorkTime extends React.Component{
  render(){
    let result = this.props.data.objectCl || [];
    let [objectCl] = result;

    return(
      <div className={css.objectProfileStyle}>
        {
          this.props.data.loading ? null :
          objectCl == undefined ? null :
        <div>
          <div className={css.profileWorkTimeFirst}>
            <div className={css.profileWorkTimeFirstBox}>
              <p>Informacije</p>
            </div>
          </div>
          <div className={css.profileWorkTimeThirth}>
            <div className={css.profileWorkTimeThirthBox}>
              <ProfileInfo objectCl={objectCl}/>
              {/* <ProfileMap {...this.props} objectCl={objectCl}/> */}
            </div>
          </div>
          <div>
            <div className={css.profileWorkTimeHeader}>
              <p>Radno vreme i praznici</p>
            </div>
            <div className={css.profileWorkTimeSecond}>
            <ObjectWorkTime objectCl={objectCl}/>
            <ProfileWorkClock
            isWorking={objectCl.workingTimeInfo.isWorking}
            verified={objectCl.verified}/>
            </div>
            {/* <ProfileCalendar /> */}
          </div>
        </div>
        }
      </div>
    )
  }
}
export default withRouter(ProfileWorkTime);
