import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';

class Section extends Component {
  render() {
    const {
      data: {
        id,
        title,
      }, 
      data
    } = this.props
    const classes = data.hasOwnProperty('class') ? data.class : '';
    return (
      <section className={classes} id={id}>
        {title && <ReactMarkdown source={title} renderers={{root:React.Fragment}} />}
        {data.content && <ReactMarkdown source={data.content} escapeHtml={false} renderers={{root:React.Fragment}} />}
        {data.items}
      </section>
    );
  }
}

const SectionYamlType = new yaml.Type('!section', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null && data.items !== null && data.id !== null && data.title !== null ;
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Section data={data} key={data.id} />;
  },
  instanceOf: Section
});

export {
   Section, SectionYamlType
}