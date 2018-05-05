import React, { Component } from 'react';

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
          <button type="submit" className="btn btn-primary">Add Name</button>
          <button type="delete" className="btn btn-secondary">Remove Name</button>
        </span>
      </form>
    );
  }
}

export default NameBar;
