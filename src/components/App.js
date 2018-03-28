import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

// var markdown = require( "markdown" ).markdown;

class App extends Component {
  constructor() {
    super();
    this.state = {
      reults: {}
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

// console.log( markdown.toHTML( "Hello *World*!" ) );
// http://thisdavej.com/getting-started-with-yaml-in-node-js-using-js-yaml/