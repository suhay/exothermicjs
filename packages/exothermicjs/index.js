import yaml from 'js-yaml'

import { NavbarYamlType } from './src/components/navbar'
import { SectionYamlType, ColYamlType, MainYamlType, HeaderYamlType, FooterYamlType } from './src/components/layout'
import { ArticleYamlType } from './src/components/article'
import { GetYamlType } from './src/components/util/Get'
import { FormYamlType } from './src/components/form'

const configBuilder = () => {
  const def = require('./exothermic.config')
  let user = {}
  try {
    user = require('../../exothermic.config')
  }
  catch (e) { }
  return {
    ...def,
    ...user
  }
}

const conf = configBuilder()

const Types = {
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
  const plugins = conf.plugins.map(plug => require('../' + plug + '/src'))
  if (addedPlugins && addedPlugins.length > 0) {
    // Override all Types with their addedPlugins replacers
    const addedPlusStandard = { ...Types, ...addedPlugins }
    const schemaTypes = [...Object.keys(addedPlusStandard).map(key => addedPlusStandard[key]), ...plugins.map(plugin => plugin.Type)]
    return yaml.Schema.create(schemaTypes)
  }
  else {
    return yaml.Schema.create([...Object.keys(Types).map(key => Types[key]), ...plugins.map(plugin => plugin.Type)])
  }
}

export { Types, conf }

export { version } from './package.json'

export * from './src/exothermic'

export { plugins } from './exothermic.config'