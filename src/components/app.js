import React, { Component } from 'react';
import NameBar from '../containers/name_bar';
import NameList from '../containers/name_list';
import Timer from '../containers/timer';
import Time from '../components/timer';

export default class App extends Component {
  render() {
    return (
      <div>
        <div align="middle">
        <Time />
        </div>
      <br />
        <NameBar />
        <NameList />
      </div>
    );
  }
}
