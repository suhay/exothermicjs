import React from 'react'
import yaml from 'js-yaml'

import Get from './get'

export const GetYamlType = new yaml.Type(`!get`, {
  kind: `scalar`,
  resolve(path) {
    return path !== null
  },
  construct(path = `/`) {
    return <Get path={path} key={path} />
  },
  instanceOf: Get,
  represent(props) {
    const rtn = { tag: `!get ${props.data}` }
    return rtn
  },
})

export default {
  GetYamlType,
}
