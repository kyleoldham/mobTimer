import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addName } from '../actions/index';
import { bindActionCreators } from 'redux';

class NameBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    
   this.setState({ term: event.target.value }); 
    console.log(this.state.term);
  }
  
  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Add a name to your list"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button 
            type="submit" 
            className="btn btn-primary" 
            onClick={() => {this.props.addName(this.state.term)}}>
              Add Name
          </button>
          <button type="delete" className="btn btn-secondary">Remove Name</button>
        </span>
      </form>
    );
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addName: addName }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NameBar);
