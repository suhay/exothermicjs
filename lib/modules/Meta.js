import React, { Component } from 'react';
import { key, val } from '../components/Base';

class Meta extends Component {
  render() {
    if (!this.props.tags) {
      return null;
    }
    let metaTags = [];
    this.props.tags.forEach((tag, index) => {
      let numTags = Object.keys(tag).length;
      if ('charSet' in tag || numTags > 1) { // Not just a key and value
        let meta = {};
        for (let i = 0; i < numTags; i++) {
          meta[key(tag, i)] = val(tag, i);
        }
        metaTags.push(meta);
      } else {
        metaTags.push({'name':key(tag), 'content':val(tag)});
      }
    });

    return metaTags.map((item) => (
      <meta {...item} />
    ));
  }
}

export default Meta;