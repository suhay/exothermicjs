import React from 'react'
import { hydrate } from "react-dom"
import yaml from 'js-yaml'
import { Base64 } from 'js-base64'
import reactn from 'reactn'
import { StyleSheet } from 'aphrodite'
import { BrowserRouter, NavLink } from 'react-router-dom'

import Loader from './components/loader'
import { apply } from './schema'
import { dump } from './components/util'

window.React = React
window.reactn = reactn
window[`js-yaml`] = yaml
window[`react-router-dom`] = {
  NavLink,
}

export const initialize = (path = `/`) => {
  StyleSheet.rehydrate(window.renderedClassNames)
  reactn.setGlobal({ route: path })

  let data = null
  let options = null
  let Dashboard = null
  const raw = {}
  if (window && window.exothermic) {
    Dashboard = window.exothermic.dashboard && window.exothermic.options.dashboard.trim().length > 0 ? window.exothermic.dashboard[window.exothermic.options.dashboard.trim()] : null

    const base = yaml.safeLoad(Base64.decode(window.exothermic.base))
    const page = apply(Base64.decode(window.exothermic.page), { set: true })
    data = { ...base, ...page }

    const parsedRaw = JSON.parse(Base64.decode(window.exothermic.raw))

    Object.keys(parsedRaw).forEach((key) => {
      raw[key] = parsedRaw[key].startsWith(`---`) 
        ? apply(parsedRaw[key])
        : parsedRaw[key]
    })

    options = window.exothermic.options || {}
  }
  hydrate(
    Dashboard
      ? (
        <BrowserRouter>
          <Dashboard.OffCanvasContainer dump={dump} path={path === `/` ? `index` : path.replace(/^\//, ``)}>
            <Loader data={data} raw={raw} options={options} />
          </Dashboard.OffCanvasContainer>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Loader data={data} raw={raw} options={options} />
        </BrowserRouter>
      ),
    document.getElementById(`__exothermic`),
    () => {
      delete window.exothermic.base
      delete window.exothermic.page
      delete window.exothermic.options
    }
  )
}
