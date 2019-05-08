import React, { Component, Fragment } from 'react'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'
import fs from 'fs'

import Spinner from './Spinner'
import pageState from '../../state/page'
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
    const { data: fetchPath } = this.props
    let Dashboard = null
    try { Dashboard = require(`../../dashboard`) } catch (e) {}
    fetch(`/load/${fetchPath}`)
      .then(response => response.text())
      .then(data => this.setState({
        data: yaml.safeLoad(data, {
          schema: window.DASHBOARD && Dashboard ? Dashboard.Schema() : Schema(),
        }),
        loading: false,
      }))
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
    return <Get data={data} key="get" />
  },
  instanceOf: Get,
  represent(data) {
    const rtn = { tag: `!get ${data}` }
    return rtn
  },
})
