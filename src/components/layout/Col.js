import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';
import yaml from 'Components/util/js-yaml';

class Col extends Component {
  render() {
    let classes = 'col';
    if (this.props.data.hasOwnProperty('class')) {
      classes = this.props.data.class.startsWith('col') ? this.props.data.class : 'col ' + this.props.data.class;
    }
    return (
      <div className={classes}>
        <ReactMarkdown source={this.props.data.content} escapeHtml={false} renderers={{root:React.Fragment}} />
        {this.props.data.items}
      </div>
    );
  }
}

var ColYamlType = new yaml.Type('!col', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null && data.id !== null;
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Col data={data} key={data.id} />;
  },
  instanceOf: Col
});

export {
   Col, ColYamlType
}