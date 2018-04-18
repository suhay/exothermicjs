import React, { Component } from 'react';
import { key, val } from '../components/Base';

class Script extends Component {
  render() {
    if (!this.props.scripts) {
      return null;
    }
    let scriptTags = [],
        scriptBody = [];
    this.props.scripts.forEach((tag, index) => {
      if (typeof tag === "string") {
        scriptTags.push({'src':tag});
        scriptBody.push('');
      } else {
        let numTags = Object.keys(tag).length;
        if (numTags > 1) { // Not just a key and value
          let script = {};
          for (let i = 0; i < numTags; i++) {
            script[key(tag, i)] = val(tag, i);
          }
          scriptTags.push(script);
          scriptBody.push('');
        } else {
          scriptTags.push({'src':val(tag)});
          scriptBody.push('');
        }
      }
    });

    return scriptTags.map((item, i) => (
      <script {...item}>{scriptBody[i]}</script>
    ));
  }
}

export default Script;