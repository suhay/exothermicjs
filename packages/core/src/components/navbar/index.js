import React from 'react'

import NavItem from './item'

const Navbar = ({ items }) => (
  <nav aria-label="main nav">
    <ul role="menubar">
      {items.map((item, i) => (
        <NavItem item={item} key={i.toString()} id={i} size={items.length} />
      ))}
    </ul>
  </nav>
)

export default Navbar
