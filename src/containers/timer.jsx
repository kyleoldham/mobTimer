import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import { bindActionCreators } from 'redux';
import { removeName } from '../actions/index';
import { connect } from 'react-redux';

class Timer extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      pause: true,
      seconds: 900,
      countdown: true 
    };

    this.onCountdownComplete = this.onCountdownComplete.bind(this);
  }

  onCountdownComplete() {
    if(this.state.countdown)
      this.setState({ countdown: false, seconds: 901 });
    else
      this.setState({ countdown: true, seconds: 900 });
    this.props.removeName("F!R$T");
  }

  render() {
    return (
      <div>
        <ReactCountdownClock seconds={this.state.seconds}
                       color="#000"
                       alpha={0.9}
                       size={300}
                       paused={this.state.pause}
                       onComplete={this.onCountdownComplete }
                                                />
        <button 
          className="btn btn-primary"
          onClick={() => this.setState({ pause: !this.state.pause })}>
             Start / Stop
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ removeName } ,dispatch);
}

export default connect(null, mapDispatchToProps)(Timer);

