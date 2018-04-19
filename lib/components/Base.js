import React, { Component } from 'react';
import yaml from 'js-yaml';

import { NavbarYamlType } from 'Modules/navbar/Navbar';
import { LAYOUT_SCHEMA } from 'Modules/layout/Section';
import { ArticleYamlType } from 'Modules/article/Article';
import { GetYamlType } from 'Modules/util/Get';
import Page from 'Components/Page';

export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      pages: this.props.pages,
      route: this.props.route,
    };
  }
  
  render() {
    const { children } = this.props;
    let childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { pages: this.state.pages }));

    return (
      <Page data={this.state.data} pages={this.state.pages} route={this.state.route}>
        {childrenWithProps}
      </Page>
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
