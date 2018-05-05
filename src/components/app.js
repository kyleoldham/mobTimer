import React, { Component } from 'react';
import NameBar from '../containers/name_bar';
import NameList from '../containers/name_list';
import Timer from '../containers/timer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Timer />
        <NameList />
        <NameBar />
      </div>
    );
  }
}
