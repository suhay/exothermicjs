import React, { Component } from 'react';
import yaml from 'js-yaml';

import { NavbarYamlType } from '../modules/navbar/Navbar';
import { LAYOUT_SCHEMA } from '../modules/layout/Section';
import { ArticleYamlType } from '../modules/article/Article';
import { GetYamlType } from '../modules/util/Get';

export default class Base extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export function key(item, i = 0) {
  return Object.keys(item)[i];
}

export function val(item, i = 0) {
  return item[Object.keys(item)[i]];
}

export const version = "v0.2.1";

export const REACTY_SCHEMA = yaml.Schema.create([LAYOUT_SCHEMA], [NavbarYamlType, ArticleYamlType, GetYamlType]);
