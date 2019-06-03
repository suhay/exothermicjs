import React, { PureComponent } from 'react'

import NavItem from './item'

export default class Navbar extends PureComponent {
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
