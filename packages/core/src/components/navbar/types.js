import React from 'react'
import yaml from 'js-yaml'

import Navbar from '.'

const NavbarYamlType = new yaml.Type(`!navbar`, {
  kind: `mapping`,
  construct(data = {}) {
    return <Navbar items={data.items} key="nav" />
  },
  instanceOf: Navbar,
})

export default NavbarYamlType
