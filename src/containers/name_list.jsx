import React, { Component } from 'react';
import { connect } from 'react-redux';

class NameList extends Component {
  renderNameList(){
    return this.props.names.map((name) => {
      return (
        <li key={name.name}
            className="list-group-item"
        >
          {name.name}
        </li>
      );
    });
  }

  render() {
    return(
     <ul className="list-group col-4">
        {this.renderNameList()}
      </ul> 
    );
  }
}

function mapStateToProps(state){
  return {
    names: state.names
  };
}

export default connect(mapStateToProps)(NameList);
