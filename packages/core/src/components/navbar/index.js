import React from 'react'

import NavItem from './item'

const Navbar = ({ items }) => {
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

export default Navbar
