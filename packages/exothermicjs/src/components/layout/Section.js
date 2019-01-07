import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';

export class Section extends Component {
  render() {
    const {
      data: {
        id,
        title,
      }, 
      data,
      children
    } = this.props
    const classes = data.hasOwnProperty('class') ? data.class : '';
    return (
      <section className={classes} id={id}>
        {title && <ReactMarkdown source={title} renderers={{root:React.Fragment}} />}
        {data.content}
        {data.items}
        {children}
      </section>
    );
  }
}

export const SectionYamlType = new yaml.Type('!section', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null && data.items !== null && data.id !== null && data.title !== null ;
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Section data={data} key={data.id} />;
  },
  instanceOf: Section,
  represent: function (data) {
    const rtn = { _tag: '!section', ...data }
    return rtn
  }
});