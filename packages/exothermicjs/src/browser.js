import React from 'react'
import { hydrate } from "react-dom"
import yaml from 'js-yaml'

import { dragState } from './state'
import Loader from './components/loader'

const dumpTag = (tag) => {
  let represent = tag._self.represent && tag.props.data ? tag._self.represent(tag.props.cacheId ? tag.props : tag.props.data) : {}
  if (represent.content) {
    represent.content = represent.content._self.represent ? represent.content._self.represent(represent.content.props) : represent.content
  }
  if (represent.items) {
    represent.items = represent.items.map(part => dumpTag(part))
  } else if (tag.props.children) {
    represent = { ...represent, ...dumpTag(tag.props.children) }
  } else if (tag.props.items) {
    represent.items = tag.props.id && dragState.state.draggables[tag.props.id]
      ? dragState.state.draggables[tag.props.id].map(part => dumpTag(part))
      : tag.props.items.map(part => dumpTag(part))
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

window.EXOTHERMIC = window.EXOTHERMIC || {}

window.EXOTHERMIC.initialize = config => hydrate(
  <Loader dump={dump} config={config} path={window.location.pathname === `/` ? `index` : window.location.pathname.replace(/^\//, ``)} />,
  document.getElementById(`__exothermic`)
)
