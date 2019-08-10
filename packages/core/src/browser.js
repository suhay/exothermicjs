import React from 'react'
import { hydrate } from "react-dom"
import yaml from 'js-yaml'
import { Base64 } from 'js-base64'

import { dragState } from './state'
import Loader from './components/loader'
import schema from './schema'

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

export const initialize = (path = `/`) => {
  let data = null
  if (window && window.exothermic) {
    const base = yaml.safeLoad(Base64.decode(window.exothermic.base))
    const page = yaml.safeLoad(Base64.decode(window.exothermic.page), {
      schema: schema(),
    })
    data = { ...base, ...page }
  }
  hydrate(
    <Loader dump={dump} path={path === `/` ? `index` : path.replace(/^\//, ``)} data={data} />,
    document.getElementById(`__exothermic`),
    () => {
      delete window.exothermic.base
      delete window.exothermic.page
    }
  )
}
