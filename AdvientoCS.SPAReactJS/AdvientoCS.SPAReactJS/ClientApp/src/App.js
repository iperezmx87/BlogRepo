import React, { Component } from 'react';
import Contador from './components/Contador';

export default class App extends Component {
  displayName = App.name

  render() {
      return (
        <Contador />
    );
  }
}
