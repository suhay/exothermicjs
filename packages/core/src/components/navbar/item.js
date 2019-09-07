import React from 'react'

import Link from './link'
import { key, val } from '../util'

const NavItem = ({ item, size, id }) => (
  <li role="none">
    <Link to={val(item)} aria-setsize={size} aria-posinset={id + 1} role="menuitem">{key(item)}</Link>
  </li>
)

export default NavItem
