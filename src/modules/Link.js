import React, { Component } from 'react';
import Base from '../components/Base';

class Link extends Component {
  render() {
    let linkTags = [];
    this.props.links.forEach((tag, index) => {
      if (typeof tag === "string") {
        linkTags.push({'href':tag, 'rel':'stylesheet', 'type':"text/css"});
      } else {
        let numTags = Object.keys(tag).length;
        if (numTags > 1) { // Not just a key and value
          let link = {};
          for (let i = 0; i < numTags; i++) {
            link[Base.key(tag, i)] = Base.val(tag, i);
          }
          linkTags.push(link);
        } else {
          linkTags.push({'href':Base.val(tag), 'rel':Base.key(tag)});
        }
      }
    });

    return linkTags.map((item) => (
      <link {...item} />
    ));
  }
}

export default Link;

// <link rel="stylesheet" type="text/css" href="https://cdn.sstatic.net/Sites/stackoverflow/primary.css?v=46ace4ab14a1">
