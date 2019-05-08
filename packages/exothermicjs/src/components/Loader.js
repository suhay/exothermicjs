import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import yaml from 'js-yaml'
import { BrowserRouter } from 'react-router-dom'
import { Subscribe } from 'statable'

import Spinner from './util/Spinner'
import Page from './Page'
import { Schema } from '../../'
import pageState from '../state/page'

export default class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      loading: true,
      path: props.path,
    }
  }

  componentDidMount() {
    const { path } = this.state
    pageState.setState({ route: path })
    let Dashboard = null
    try { Dashboard = require(`../dashboard`) } catch (e) {}
    fetch(`/load/${path}`.replace(`//`, `/`), { credentials: `same-origin` })
      .then(response => response.text())
      .then(data => this.setState({
        data: yaml.safeLoad(data, {
          schema: window.DASHBOARD && Dashboard ? Dashboard.Schema() : Schema(),
        }),
        loading: false,
      }))
      .catch((error) => { throw error })
  }

  render() {
    const { loading, path, data } = this.state
    const { dump } = this.props
    const { Dashboard } = window ? window.EXOTHERMIC : { Dashboard: null }
    return (
      <Subscribe to={[pageState]}>
        {state => (
          <div className="base">
            {loading
              ? <Spinner name="folding-cube" />
              : Dashboard
                ? (
                  <BrowserRouter>
                    <Dashboard.OffCanvas dump={dump} path={path}>
                      <Page data={state.data || data} />
                    </Dashboard.OffCanvas>
                  </BrowserRouter>
                )
                : (
                  <BrowserRouter>
                    <Page data={state.data || data} />
                  </BrowserRouter>
                )
             }
          </div>
        )}
      </Subscribe>
    )
  }
}
