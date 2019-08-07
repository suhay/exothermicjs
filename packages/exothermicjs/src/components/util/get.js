import React, { Component } from 'react'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'
import fs from 'fs'

import Spinner from './spinner'
import { pageState } from '../../state'
import schema from '../../schema'

export const GetContext = React.createContext(``)

export default class Get extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: fs && typeof fs.readFileSync === `function`
        ? yaml.safeLoad(fs.readFileSync(`${pageState.state.pagesPath}/${props.data}.exo`, `utf8`), { schema: schema() })
        : null,
      loading: !(fs && typeof fs.readFileSync === `function`),
    }
  }

  componentDidMount() {
    const { data: fetchPath, cacheId } = this.props
    
    fetch(`/load/${fetchPath}`)
      .then(response => response.text())
      .then((data) => {
        const yamlData = yaml.safeLoad(data, {
          schema: schema(),
        })
        this.setState({
          data: yamlData,
          loading: false,
        })
        const cache = { ...pageState.state.cache }
        cache[cacheId] = {}
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
    const { cacheId } = this.props
    return (
      <div className={loading ? `get-loading` : `get-loaded`}>
        {!loading && (
          <GetContext.Provider value={cacheId}>
            {data.content}
            {data.items}
          </GetContext.Provider>
        )}
        {loading && <Spinner name="folding-cube" />}
      </div>
    )
  }
}
