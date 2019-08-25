import React from 'react'
import { hydrate } from "react-dom"
import yaml from 'js-yaml'
import { Base64 } from 'js-base64'
import reactn from 'reactn'
import { StyleSheet } from 'aphrodite'
import { BrowserRouter, NavLink } from 'react-router-dom'

import Loader from './components/loader'
import schema from './schema'

window.React = React
window.reactn = reactn
window[`js-yaml`] = yaml
window[`react-router-dom`] = {
  NavLink,
}

const dumpTag = (tag) => {
  let represent = tag._self.represent && tag.props.data ? tag._self.represent(tag.props.cacheId ? tag.props : tag.props.data) : {}
  if (represent.content) {
    represent.content = represent.content._self.represent ? represent.content._self.represent(represent.content.props) : represent.content
  }
  if (represent.items) {
    represent.items = represent.items.map(part => dumpTag(part))
  } else if (tag.props.children) {
    represent = { ...represent, ...dumpTag(tag.props.children) }
  } 
  return represent
}

const dump = (data) => {
  const { description, tags, page } = data.props.data
  return `---\n${yaml.dump({
    description,
    tags,
    page: page.map(part => dumpTag(part)),
  }).replace(/tag: '!(.*)'/g, `!$1`)}`
}

export const initialize = (path = `/`) => {
  StyleSheet.rehydrate(window.renderedClassNames)

  let data = null
  let options = null
  let Dashboard = null
  const raw = {}
  if (window && window.exothermic) {
    Dashboard = window.exothermic.dashboard && window.exothermic.options.dashboard.trim().length > 0 ? window.exothermic.dashboard[window.exothermic.options.dashboard.trim()] : null

    const base = yaml.safeLoad(Base64.decode(window.exothermic.base))
    const page = yaml.safeLoad(Base64.decode(window.exothermic.page), {
      schema: Dashboard ? Dashboard.schema() : schema({ set: true }),
    })
    data = { ...base, ...page }

    const parsedRaw = JSON.parse(Base64.decode(window.exothermic.raw))

    Object.keys(parsedRaw).forEach((key) => {
      raw[key] = parsedRaw[key].startsWith(`---`) 
        ? yaml.safeLoad(parsedRaw[key], {
          schema: schema(),
        }) 
        : parsedRaw[key]
    })

    options = window.exothermic.options || {}
  }
  hydrate(
    Dashboard
      ? (
        <BrowserRouter>
          <Dashboard.OffCanvasContainer>
            <Loader dump={dump} path={path === `/` ? `index` : path.replace(/^\//, ``)} data={data} raw={raw} options={options} />
          </Dashboard.OffCanvasContainer>
        </BrowserRouter>
      )
      : (
        <BrowserRouter>
          <Loader dump={dump} path={path === `/` ? `index` : path.replace(/^\//, ``)} data={data} raw={raw} options={options} />
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
