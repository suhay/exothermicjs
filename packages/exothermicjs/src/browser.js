import React from 'react'
import { hydrate } from "react-dom"
import yaml from 'js-yaml'

import { dragState, schemaState } from './state'
import Loader from './components/loader'

import { NavbarYamlType } from './components/navbar/type'
import {
  SectionYamlType,
  ColYamlType,
  MainYamlType,
  HeaderYamlType,
  FooterYamlType,
} from './components/layout'
import ArticleYamlType from './components/article/type'
import { GetYamlType } from './components/util/types'
import { FormYamlType } from './components/form'

const dumpTag = (tag) => {
  console.log(tag)
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

const Types = {
  NavbarYamlType,
  SectionYamlType,
  ColYamlType,
  MainYamlType,
  HeaderYamlType,
  FooterYamlType,
  ArticleYamlType,
  GetYamlType,
  FormYamlType,
}

const configBuilder = () => {
  const def = require(`../exothermic.config`)
  let user = {}
  try {
    user = require(`../../../exothermic.config`)
  } catch (e) { }

  return {
    ...def,
    ...user,
  }
}

const Schema = (addedPlugins = []) => {
  const conf = configBuilder()
  const plugins = conf.plugins.map(plug => require(`../${plug}/src`))
  if (addedPlugins && Object.keys(addedPlugins).length > 0) {
    // Override all Types with their addedPlugins replacers
    const addedPlusStandard = { ...Types, ...addedPlugins }
    const schemaTypes = [...Object.keys(addedPlusStandard).map(
      key => addedPlusStandard[key]
    ), ...plugins.map(plugin => plugin.Type)]
    return yaml.Schema.create(schemaTypes)
  }

  return yaml.Schema.create([...Object.keys(Types).map(key => Types[key]),
    ...plugins.map(plugin => plugin.Type)])
}

schemaState.setState({ schema: () => Schema() })

window.EXOTHERMIC = window.EXOTHERMIC || {}

window.EXOTHERMIC.initialize = config => hydrate(
  <Loader dump={dump} config={config} path={window.location.pathname === `/` ? `index` : window.location.pathname.replace(/^\//, ``)} />,
  document.getElementById(`__exothermic`)
)
