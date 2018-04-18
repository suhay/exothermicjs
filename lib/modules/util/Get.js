import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

import Base, { REACTY_SCHEMA } from '../../components/Base';

class Get extends Component {
  render() {
    const data = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../../../'+this.props.data), 'utf8'), { schema: REACTY_SCHEMA });
    if (data.hasOwnProperty('items')) {
      return (
        <React.Fragment>
          {data.items}
        </React.Fragment>
      );
    } else if (data.hasOwnProperty('content')) {
      return (
        <React.Fragment>
          <ReactMarkdown source={data.content} renderers={{root:React.Fragment}} />
        </React.Fragment>
      );
    }
  }
}

var GetYamlType = new yaml.Type('!get', {
  kind: 'scalar',
  resolve: function (data) {
    return data !== null;
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Get data={data} key='get' />;
  },
  instanceOf: Get
});

export {
   Get, GetYamlType
}