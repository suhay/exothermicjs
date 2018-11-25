import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';

export class Article extends Component {
  render() {
    const classes = this.props.data.hasOwnProperty('class') ? this.props.data.class : '';
    if (this.props.data.hasOwnProperty('items')) {
      return (
        <article className={classes} id={this.props.data.id}>
          <ReactMarkdown source={this.props.data.title} renderers={{root:React.Fragment}} />
          {this.props.data.items}
        </article>
      );
    } else if (this.props.data.hasOwnProperty('content')) {
      return (
        <article className={classes} id={this.props.data.id}> 
          <ReactMarkdown source={this.props.data.title} renderers={{root:React.Fragment}} />
          <ReactMarkdown source={this.props.data.content} renderers={{root:React.Fragment}} />
        </article>
      );
    }
  }
}

export const ArticleYamlType = new yaml.Type('!article', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null && data.id !== null && data.title !== null;
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Article data={data} key={data.id} />;
  },
  instanceOf: Article,
  represent: function (data) {
    const rtn = { _tag: '!article', ...data }
    return rtn
  }
});