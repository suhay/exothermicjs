/*eslint-disable no-console*/
import React, { Component } from 'react';
import yaml from 'js-yaml';

import Link from './link'
import { key, val } from '../util';

export class Navbar extends Component {
  render() {
    const nav = this.props.items.map((item, i) => (
      <Navitem item={item} key={i.toString()} id={i} size={this.props.items.length} />
    ));
    return (
      <nav aria-label="main nav">
        <ul role="menubar">
          {nav}
        </ul>
      </nav>
    );
  }
}

export class Navitem extends Component {
  render() {
    return (
      <li role="none">
        <Link to={val(this.props.item)} aria-setsize={this.props.size} aria-posinset={this.props.id + 1} role="menuitem">{key(this.props.item)}</Link>
      </li>
    );
  }
}

export const NavbarYamlType = new yaml.Type('!navbar', {
  kind: 'mapping',
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Navbar items={data.items} key="nav" />;
  },
  instanceOf: Navbar,
  represent: function (data) {
    const rtn = { _tag: '!navbar', ...data }
    return rtn
  }
});