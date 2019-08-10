import React from 'react'
import yaml from 'js-yaml'

import Navbar from './'

const NavbarYamlType = new yaml.Type(`!navbar`, {
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

export default NavbarYamlType
