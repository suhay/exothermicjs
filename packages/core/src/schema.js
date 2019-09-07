import yaml from 'js-yaml'
import { setGlobal, getGlobal } from 'reactn'

import NavbarYamlType from './components/navbar/types'
import {
  SectionYamlType,
  ColYamlType,
  MainYamlType,
  HeaderYamlType,
  FooterYamlType,
} from './components/layout/types'
import ArticleYamlType from './components/article/types'
import { GetYamlType } from './components/util/types'
import { FormYamlType } from './components/form'
import configBuilder from './config'
import { isBrowser } from './components/util'

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
    
    const plugins = isBrowser && window.exothermic
      ? Object.values(window.exothermic.plugin || []).map(plugin => plugin.Type ? plugin.Type(yaml) : null).filter(plugin => plugin)
      : (conf.plugins || []).map(plug => require(`${plug.replace(`@exothermic/`, `../../`)}/src`).Type(yaml))

    if (adds && Object.keys(adds).length > 0) {
      Object.keys(adds).forEach((key) => {
        adds[key] = adds[key](yaml)
      })
      // Override all Types with their addedPlugins replacers
      const addedPlusStandard = { ...Types, ...adds }
      newSchema = yaml.Schema.create(Object.keys(addedPlusStandard || []).map(key => addedPlusStandard[key]).concat(plugins))
    } else {
      newSchema = yaml.Schema.create(Object.keys(Types || []).map(key => Types[key]).concat(plugins))
    }

    setGlobal({ schema: newSchema })
    return newSchema
  }

  return globalSchema
}

export default schema
