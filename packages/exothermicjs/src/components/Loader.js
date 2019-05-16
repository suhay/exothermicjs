import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import yaml from 'js-yaml'
import { BrowserRouter } from 'react-router-dom'
import { Subscribe } from 'statable'

import Spinner from './util/spinner'
import Page from './page'
import { Schema } from '../../'
import pageState from '../state/page'

const Loader = ({ path: propsPath, dump }) => {
  const [path] = useState(propsPath)
  useEffect(() => {
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
  })

  const { Dashboard } = window ? window.EXOTHERMIC : { Dashboard: null }
  return (
    <Subscribe to={[pageState]}>
      {({ route, loading, data }) => (
        <div className="base">
          {loading
            ? <Spinner name="folding-cube" />
            : Dashboard
              ? (
                <BrowserRouter>
                  <Dashboard.OffCanvas dump={dump} path={route}>
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

export default Loader
