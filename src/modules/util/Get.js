import React, { Component } from 'react';
import { LAYOUT_SCHEMA } from '../layout/Section';
import { ArticleYamlType } from '../article/Article';

import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

class Get extends Component {
  render() {
    const GET_SCHEMA = yaml.Schema.create([LAYOUT_SCHEMA], [ArticleYamlType]);
    const data = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../../'+this.props.data), 'utf8'), { schema: GET_SCHEMA });
    if (data.hasOwnProperty('items')) {
      return (
        <React.Fragment>
          {data.items}
        </React.Fragment>
      );
    } else if (data.hasOwnProperty('content')) {
//       const root = props => (
//         <React.Fragment>
//           {props.children}
//         </React.Fragment>
//       )
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