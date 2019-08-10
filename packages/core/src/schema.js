import yaml from 'js-yaml'

import NavbarYamlType from './components/navbar/type'
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
import configBuilder from './config'

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

const schema = (options = {}) => {
  const { addedPlugins = {} } = options
  const conf = configBuilder()
  
  const plugins = typeof window !== `undefined` && window.exothermic
    ? Object.values(window.exothermic.plugin).map(plugin => plugin.Type(yaml))
    : conf.plugins.map(plug => require(`${plug.replace(`@exothermic/`, `../../`)}/src`).Type(yaml))

  if (addedPlugins && Object.keys(addedPlugins).length > 0) {
    // Override all Types with their addedPlugins replacers
    const addedPlusStandard = { ...Types, ...addedPlugins }
    const schemaTypes = [...Object.keys(addedPlusStandard).map(
      key => addedPlusStandard[key]
    ), ...plugins.map(plugin => plugin.Type)]
    return yaml.Schema.create(schemaTypes)
  }

  return yaml.Schema.create(Object.keys(Types).map(key => Types[key]).concat(plugins))
}

export default schema
