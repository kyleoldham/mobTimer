import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeName } from '../actions/index';
import { bindActionCreators } from 'redux';

class NameList extends Component {
  renderNameList(){
    if (!this.props.names)
      return <div></div>

    return this.props.names.map((name) => {
      return (
        <li key={name.name}
            className="list-group-item"
        >
        <div>
          {name.name}
        <div align="right">
        <button className="btn btn-primary"
              onClick={() => this.props.removeName(name.name)}>
          Remove
         </button>
        </div>
        </div>
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
    names: state.addnames
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ removeName } ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NameList);
