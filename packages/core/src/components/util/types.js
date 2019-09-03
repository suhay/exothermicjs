import React from 'react'
import yaml from 'js-yaml'
import { getGlobal } from 'reactn'

import Get from './get'
import { dumpFragment } from '../util'

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
    const rtn = { tag: `!get ${props.path}` }
    const glob = getGlobal()
    const fragContent = dumpFragment(glob[props.path])
    console.log(`save: ${props.path}\n${fragContent}`)
    return rtn
  },
})

export default {
  GetYamlType,
}
