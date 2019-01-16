import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';

export class Article extends Component {
  render() {
    const classes = this.props.data.class ? this.props.data.class : '';
    const {
      data: {
        id,
        title,
      }, 
      data
    } = this.props
    return (
      <article className={classes} id={data.id}>
        <ReactMarkdown source={data.title} renderers={{root:React.Fragment}} />
        {data.content}
        {data.items}
      </article>
    )
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