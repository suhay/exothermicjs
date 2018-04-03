import React, { Component } from 'react';
import { Col, ColYamlType } from './Col';

import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';

class Section extends Component {
  render() {
    const classes = this.props.data.hasOwnProperty('class') ? this.props.data.class : '';
    return (
      <section className={classes} id={this.props.data.id}>
        <ReactMarkdown source={this.props.data.title} renderers={{root:React.Fragment}} />
        {this.props.data.items}
      </section>
    );
  }
}

var SectionYamlType = new yaml.Type('!section', {
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

const LAYOUT_SCHEMA = yaml.Schema.create([ 
    SectionYamlType, 
    ColYamlType
  ]);

export {
   Section, SectionYamlType, Col, ColYamlType, LAYOUT_SCHEMA
}