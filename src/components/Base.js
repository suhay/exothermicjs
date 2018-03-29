import React, { Component } from 'react';
import '../styles/Base.css';

class Base extends Component {
  render() {
    return (
      <p>content</p>
    );
  }
  
  static key(item, i = 0) {
    return Object.keys(item)[i];
  }
  
  static val(item, i = 0) {
    return item[Object.keys(item)[i]];
  }
  
  static version() {
    return "v0.1.0";
  }
}

export default Base;

// console.log( markdown.toHTML( "Hello *World*!" ) );
// http://thisdavej.com/getting-started-with-yaml-in-node-js-using-js-yaml/