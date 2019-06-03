import yaml from 'js-yaml'

import { schemaState } from './src/state'
import { NavbarYamlType } from './src/components/navbar/type'
import {
  SectionYamlType,
  ColYamlType,
  MainYamlType,
  HeaderYamlType,
  FooterYamlType,
} from './src/components/layout'
import ArticleYamlType from './src/components/article/type'
import { GetYamlType } from './src/components/util/types'
import { FormYamlType } from './src/components/form'

export const Types = {
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
  const def = require(`./exothermic.config`)
  let user = {}
  try {
    user = require(`../../exothermic.config`)
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

export { version } from './package.json'
export { plugins } from './exothermic.config'
export { render, hydrate, get } from './src/exothermic'

export { Footer } from './src/components/layout/footer'
export { Main } from './src/components/layout/main'
export { default as Section } from './src/components/layout/section'
