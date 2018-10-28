/*eslint-disable no-console*/
import React, { Component } from 'react';
import yaml from 'js-yaml';

import Link from './link'
import { key, val } from '../util';

class Navbar extends Component {
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

class Navitem extends Component {
  render() {
    return (
      <li role="none">
        <Link to={val(this.props.item)} aria-setsize={this.props.size} aria-posinset={this.props.id + 1} role="menuitem">{key(this.props.item)}</Link>
      </li>
    );
  }
}

const NavbarYamlType = new yaml.Type('!navbar', {
  kind: 'mapping',
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Navbar items={data.items} key="nav" />;
  },
  instanceOf: Navbar
});

export {
   Navbar, Navitem, NavbarYamlType
}
