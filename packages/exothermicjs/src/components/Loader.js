import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import yaml from 'js-yaml'
import { BrowserRouter } from 'react-router-dom'
import { Subscribe } from 'statable'

import Spinner from './util/Spinner'
import Page from './page'
import { Schema } from '../../'
import pageState from '../state/page'

export default class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: props.path,
    }
  }

  componentDidMount() {
    const { path } = this.state
    pageState.setState({ route: path })
    const { Dashboard } = window ? window.EXOTHERMIC : { Dashboard: null }
    fetch(`/load/${path}`.replace(`//`, `/`), { credentials: `same-origin` })
      .then(response => response.text())
      .then(data => pageState.setState({
        data: yaml.safeLoad(data, {
          schema: Dashboard ? Dashboard.Schema() : Schema(),
        }),
        loading: false,
      }))
      .catch((error) => { throw error })
  }

  render() {
    const { dump } = this.props
    const { Dashboard } = window ? window.EXOTHERMIC : { Dashboard: null }
    return (
      <Subscribe to={[pageState]}>
        {({ path, loading, data }) => (
          <div className="base">
            {loading
              ? <Spinner name="folding-cube" />
              : Dashboard
                ? (
                  <BrowserRouter>
                    <Dashboard.OffCanvas dump={dump} path={path}>
                      <Page data={data} />
                    </Dashboard.OffCanvas>
                  </BrowserRouter>
                )
                : (
                  <BrowserRouter>
                    <Page data={data} />
                  </BrowserRouter>
                )
             }
          </div>
        )}
      </Subscribe>
    )
  }
}
