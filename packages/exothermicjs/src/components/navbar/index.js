import React, { PureComponent } from 'react'
import yaml from 'js-yaml'

import NavItem from './item'

export class Navbar extends PureComponent {
  render() {
    const { items } = this.props
    const nav = items.map((item, i) => (
      <NavItem item={item} key={i.toString()} id={i} size={items.length} />
    ))
    return (
      <nav aria-label="main nav">
        <ul role="menubar">
          {nav}
        </ul>
      </nav>
    )
  }
}

export const NavbarYamlType = new yaml.Type(`!navbar`, {
  kind: `mapping`,
  construct(data = {}) {
    return <Navbar items={data.items} key="nav" />
  },
  instanceOf: Navbar,
  represent(data) {
    const rtn = { tag: `!navbar`, ...data }
    return rtn
  },
})
