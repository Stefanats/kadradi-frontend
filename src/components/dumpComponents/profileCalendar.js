import React from 'react';
import css from '../styles/styles.scss';

let style1 = {
  flex: 1,
  background: 'green',
  height:'50px'
}
let style2 = {
  flex: 2,
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
}
let style3 = {
  height:'50px',
  flex: 1,
  background: 'red',
}
let array = [
  {
    id: 1,
    dan: {
      dan: '31',
      datum: 'Utorak',
    },
    radnoVreme: {
      od: '08:00',
      do: '16:00',
    },
    desavanje: 'Nova godina',
  },
  {
    id: 2,
    dan: {
      dan: '17',
      datum: 'Sreda',
    },
    radnoVreme: {
      od: '09:00',
      do: '20:00',
    },
    desavanje: 'Rodjendan',
  },
  {
    id: 3,
    dan: {
      dan: '01',
      datum: 'Subota',
    },
    radnoVreme: {
      od: '16:00',
      do: '00:00',
    },
    desavanje: 'Striptiz',
  },
  {
    id: 4,
    dan: {
      dan: '20',
      datum: 'Ponedeljak',
    },
    radnoVreme: {
      od: '07:00',
      do: '23:00',
    },
    desavanje: 'Uzivo svirka',
  },
  {
    id: 5,
    dan: {
      dan: '14',
      datum: 'Nedelja',
    },
    radnoVreme: {
      od: '08:30',
      do: '17:30',
    },
    desavanje: 'Takmicenje u bocanju',
  },
]
class ProfileWorkClock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: 1,
    }
  }
  slide = e => {
    if(e === 'right') {
      this.state.id === array.length ? null :
      this.setState({
        id: this.state.id + 1,
      })
    }
    if(e === 'left') {
      this.state.id === 1 ? null :
      this.setState({
        id: this.state.id - 1,
      })
    }
  }
  render(){
    let insert = array.map((item, key) => {
      return(
        <div
          key={key} 
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: '0',
            left: `${this.state.id == item.id ? '0' :
            item.id < this.state.id == 1 ? '-100%' : '100%'}`,
            opacity: `${this.state.id == item.id ? '1' :
            item.id < this.state.id == 1 ? '0' : '0'}`,
            // transition: 'left 400ms cubic-bezier(.34,.68,.69,1.91)',
            transition: 'left 400ms',
            display:'flex',
          }}>
          <div
            style={{
              display:'flex',
              flexDirection: 'column',
              height:'100%',
              width:'100%',
              color:'#fff'
            }}
          >
          <div style={{textAlign:'center', margin:'20px',fontWeight:'600',fontSize:'20px',textShadow:'0px 2px 2px rgba(150, 150, 150, .7)'}}>
           {item.desavanje}
          </div>
          <div style={{textAlign:'center', margin:'40px 0 20px',fontSize:'25px',fontWeight:'600',textShadow:'0px 2px 2px rgba(150, 150, 150, .7)'}}>
           {item.dan.dan}
          </div>
          <div style={{textAlign:'center', margin:'5px',textShadow:'0px 2px 2px rgba(150, 150, 150, .7)'}}>
           {item.dan.datum}
          </div>
          <div style={{textAlign:'center', margin:'0px',textShadow:'0px 2px 2px rgba(150, 150, 150, .7)'}}>
           Radno vreme: {item.radnoVreme.od}-{item.radnoVreme.do}
          </div>
          </div>
        </div>
      )
    })
    return(
      <div className={css.calendarCircle}>
        <div className={css.calendarCircleWrapper}>
          <div style={style1} onClick={() => this.slide('left')}>
            <div></div>
          </div>
          <div style={style2}>
            {insert}
          </div>
          <div style={style3} onClick={() => this.slide('right')}></div>
        </div>
      </div>
    )
  }
}
export default ProfileWorkClock;
