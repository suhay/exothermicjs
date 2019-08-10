import React from 'react'
import yaml from 'js-yaml'
import shortid from 'shortid'

import Get from './get'
import { pageState } from '../../state'

export const GetYamlType = new yaml.Type(`!get`, {
  kind: `scalar`,
  resolve(data) {
    return data !== null
  },
  construct(data = {}) {
    const cacheId = shortid.generate()
    return <Get data={data} cacheId={cacheId} key={cacheId} />
  },
  instanceOf: Get,
  represent(props) {
    console.log(pageState.state.cache[props.cacheId])
    const rtn = { tag: `!get ${props.data}` }
    return rtn
  },
})

export default {
  GetYamlType,
}
