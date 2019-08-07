import yaml from 'js-yaml'

import { schemaState } from './state'
import NavbarYamlType from './components/navbar/type'
import { SectionYamlType, ColYamlType, MainYamlType, HeaderYamlType, FooterYamlType } from './components/layout'
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

const schema = (addedPlugins = []) => {
  const conf = configBuilder()
  const plugins = conf.plugins.map(plug => require(`../../${plug}/src`))
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

export default schema
