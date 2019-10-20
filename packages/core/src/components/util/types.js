import React from 'react'
import yaml from 'js-yaml'
import { getGlobal } from 'reactn'
import fetch from 'isomorphic-fetch'

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

    fetch(`/admin/${props.path}`.replace(`//`, `/`), {
      credentials: `same-origin`,
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json; charset=utf-8`,
      },
      body: JSON.stringify({
        text: dumpFragment(glob[props.path]),
      }),
    })
      .then((response) => response.text())
      .then((text) => console.log(text))
      .catch((error) => { throw error })
      
    return rtn
  },
})

export default {
  GetYamlType,
}
