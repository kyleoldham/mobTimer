import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Time extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      pause: true
    };
  }

  render() {
    return (
      <div>
        <ReactCountdownClock seconds={900}
                       color="#000"
                       alpha={0.9}
                       size={300}
                       paused={this.state.pause} />
        <button 
          className="btn btn-primary"
          onClick={() => this.setState({ pause: !this.state.pause })}>
             Start / Stop
        </button>
      </div>
    );
  }
}

export default Time;

