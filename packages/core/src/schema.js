import yaml from 'js-yaml'
import { setGlobal, getGlobal } from 'reactn'

import NavbarYamlType from './components/navbar/type'
import {
  SectionYamlType,
  ColYamlType,
  MainYamlType,
  HeaderYamlType,
  FooterYamlType,
} from './components/layout/type'
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
  const { adds = {}, set = false } = options
  const { schema: globalSchema = null } = getGlobal()

  let newSchema = null
  if (set || !globalSchema) {
    const conf = configBuilder()
    
    const plugins = typeof window !== `undefined` && window.exothermic
      ? Object.values(window.exothermic.plugin || []).map(plugin => plugin.Type(yaml))
      : conf.plugins.map(plug => require(`${plug.replace(`@exothermic/`, `../../`)}/src`).Type(yaml))

    if (adds && Object.keys(adds).length > 0) {
      Object.keys(adds).forEach((key) => {
        adds[key] = adds[key](yaml)
      })
      // Override all Types with their addedPlugins replacers
      const addedPlusStandard = { ...Types, ...adds }
      newSchema = yaml.Schema.create(Object.keys(addedPlusStandard).map(key => Types[key]).concat(plugins))
    } else {
      newSchema = yaml.Schema.create(Object.keys(Types).map(key => Types[key]).concat(plugins))
    }

    setGlobal({ schema: newSchema })
    return newSchema
  }

  return globalSchema
}

export default schema
