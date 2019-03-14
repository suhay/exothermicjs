import yaml from 'js-yaml'

import { NavbarYamlType } from './src/components/navbar'
import { SectionYamlType, ColYamlType, MainYamlType, HeaderYamlType, FooterYamlType } from './src/components/layout'
import { ArticleYamlType } from './src/components/article'
import { GetYamlType } from './src/components/util/Get'
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
  FormYamlType
}

export const Schema = (addedPlugins = []) => {
  const plugins = require('./exothermic.config').plugins
  if (addedPlugins && addedPlugins.length > 0) {
    const schemaTypes = [...Object.keys(Types).map(key => Types[key]), ...plugins.map(plugin => plugin.Type), ...addedPlugins.map(plugin => plugin.Type || plugin)]
    return yaml.Schema.create(schemaTypes)
  }
  else {
    return yaml.Schema.create([...Object.keys(Types).map(key => Types[key]), ...plugins.map(plugin => plugin.Type)])
  }
}

export { version } from './package.json'

export * from './src/exothermic'

export * from './exothermic.config'