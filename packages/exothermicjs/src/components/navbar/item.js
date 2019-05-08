import React, { PureComponent } from 'react'
import Link from './link'
import { key, val } from '../util'

export default class NavItem extends PureComponent {
  render() {
    const { item, size, id } = this.props
    return (
      <li role="none">
        <Link to={val(item)} aria-setsize={size} aria-posinset={id + 1} role="menuitem">{key(item)}</Link>
      </li>
    )
  }
}
