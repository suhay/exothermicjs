import React, { Component } from 'react';
import { val, key } from '../components/Base';

class Link extends Component {
  render() {
    if (!this.props.links) {
      return null;
    }
    let linkTags = [];
    this.props.links.forEach((tag, index) => {
      if (typeof tag === "string") {
        linkTags.push({'href':tag, 'rel':'stylesheet', 'type':"text/css"});
      } else {
        let numTags = Object.keys(tag).length;
        if (numTags > 1) { // Not just a key and value
          let link = {};
          for (let i = 0; i < numTags; i++) {
            link[key(tag, i)] = val(tag, i);
          }
          linkTags.push(link);
        } else {
          linkTags.push({'href':val(tag), 'rel':key(tag)});
        }
      }
    });

    return linkTags.map((item) => (
      <link {...item} />
    ));
  }
}

export default Link;
