import React, { Component } from 'react';
import { TransactionFile } from './components/TransactionFile';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <TransactionFile />
    );
  }
}
