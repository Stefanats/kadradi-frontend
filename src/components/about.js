import React from 'react';
import css from './styles/styles.scss';
import DownStore from './downStore';
import Navigation from './navigation';
import Hamburger from './hamburger';
import ReactTransitionGroup from 'react-addons-transition-group'
import { setTimeout } from 'timers';
import Ham from './ham';
import DownloadModal from './downloadModal';

class About extends React.Component{
  constructor(props) {
    super(props);
		this.state = {
			modalDisplay: false,
		}
  }
	modalDisplay(){
		this.setState({
			modalDisplay: true,
		})
	}
  render(){
    return(
      <div>
				<button onClick={() => this.modalDisplay()}>lalaal</button>
				<DownloadModal
					display={this.state.modalDisplay}
					comment='slike' />
      </div>
    )
  }
}
export default About;