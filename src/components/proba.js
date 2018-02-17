import React from 'react';
import moment from 'moment';
import css from './styles/styles.scss';


class Proba extends React.Component{
  arrayFunction = (f) => {
    let i;
    let array = [];
    for (i = 1; i <= f; i++) {
      array.push(i);
    }
    return array;
  }
  emptyDivsFunction = (item) => {
    let i;
    let array = [];
    for (i = 1; i <= item; i++) {
      array.push('');
    }
    return array;
  }
  monthFunc = () => {
    let day;
    switch (moment().format('MM')) {
      case '01':
          day = "JANUAR";
          break;
      case '02':
          day = "FEBRUAR";
          break;
      case '03':
          day = "MART";
          break;
      case '04':
          day = "APRIL";
          break;
      case '05':
          day = "MAJ";
          break;
      case '06':
          day = "JUN";
          break;
      case '07':
          day = "JUL";
          break;
      case '08':
          day = "AVGUST";
          break;
      case '09':
          day = "SEPTEMBAR";
          break;
      case '10':
          day = "OKTOBAR";
          break;
      case '11':
          day = "NOVEMBAR";
          break;
      case '12':
          day = "DECEMBAR";
    }
    return day;
  }
  render(){
    let day = ['PON', 'UTO', 'SRE', 'ČET', 'PET', 'SUB', 'NED'];
    let days = day.map((item, key) => {
      return <div key={key} style={{width:"40px",height:"20px",fontSize:'10px',textAlign:'center'}}>{item}</div>
    }) //renderuje dane u nedelji

    let yearMonth = moment().format('YYYY-MM');
    let dayInMonth = moment().format('DD');
    let daysInMonth = moment(yearMonth, "YYYY-MM").daysInMonth(); //vraca broj dana u mesecu

    let dayInWeek = moment(`${yearMonth}-01`);
    let x = dayInWeek.day();//dan u nedelji
    let emptyDivs = x - 1;//odredjuje prvi-dan u nedelji
    let emptyWithDays = this.emptyDivsFunction(emptyDivs).concat(this.arrayFunction(daysInMonth));
    console.log(emptyWithDays)
    let stef = emptyWithDays.map((item, key)=>{
      return <div key={key} style={{color:'#fff',marginTop:'5px',width:"40px",height:"20px",fontSize:'20px',textAlign:'center'}}>{item}</div>
    })

    let stylez = {
      display:"flex",
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '280px',
      marginTop:'60px',
    }
    let stylezz = {
      padding:'7px 15px 7px 30px',
      color:'white',
      background:'rgb(209, 69, 69)',
      position: 'absolute',
      top: '0',
      left: '-20px',
      letterSpacing: '1px'

    }
    let stylezzz = {
      color: '#fff',
      fontSize: '40px',
      position: 'absolute',
      top: '0',
      right: '0',
      fontWeight: 'bold',
    }
    return(
      <div style={{position:'relative',margin:'auto',display:'flex',flexDirection:"column",}}>
        <div style={stylezzz}>{dayInMonth}</div>
        <div style={stylezz}>{this.monthFunc()}</div>
        <div style={stylez}>
          {days}
          {stef}
        </div>
      </div>
    )
  }
}
export default Proba;