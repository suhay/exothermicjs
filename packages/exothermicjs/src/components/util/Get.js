import React, { Component, Fragment } from 'react'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'
import fs from 'fs'
import shortid from 'shortid'

import Spinner from './spinner'
import { pageState } from '../../state'
import { Schema } from '../../../'

export class Get extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: fs && typeof fs.readFileSync === `function`
        ? yaml.safeLoad(fs.readFileSync(`${pageState.state.pagesPath}/${props.data}.exo`, `utf8`), { schema: Schema() })
        : null,
      loading: !(fs && typeof fs.readFileSync === `function`),
    }
  }

  componentDidMount() {
    const { data: fetchPath, cacheId } = this.props
    const { Dashboard } = window ? window.EXOTHERMIC : { Dashboard: null }
    fetch(`/load/${fetchPath}`)
      .then(response => response.text())
      .then((data) => {
        const yamlData = yaml.safeLoad(data, {
          schema: Dashboard ? Dashboard.Schema() : Schema(),
        })
        this.setState({
          data: yamlData,
          loading: false,
        })
        const cache = { ...pageState.state.cache }
        cache[cacheId] = data
        pageState.setState({
          cache,
        })
      })
  }

  componentWillUnmount() {
    const { cacheId } = this.props
    const cache = { ...pageState.state.cache }
    delete cache[cacheId]
    pageState.setState({
      cache,
    })
  }

  render() {
    const { loading, data = {} } = this.state
    return (
      <div className={loading ? `get-loading` : `get-loaded`}>
        {!loading && (
          <Fragment>
            {data.content}
            {data.items}
          </Fragment>
        )}
        {loading && <Spinner name="folding-cube" />}
      </div>
    )
  }
}

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
