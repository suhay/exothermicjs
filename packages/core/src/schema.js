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
      ? Object.values(window.exothermic.plugin || [])
        .map((plugin) => plugin.Type ? plugin.Type(yaml) : null)
        .flat()
        .filter((plugin) => plugin)
      : (conf.plugins || [])
        .filter((plug) => {
          try {
            require.resolve(`${plug.replace(`@exothermic/`, `../../`)}/src`) 
          } catch (e) {
            return false 
          }
          return true
        })
        .map((plug) => require(`${plug.replace(`@exothermic/`, `../../`)}/src`).Type(yaml))
        .flat()

    if (adds && Object.keys(adds).length > 0) {
      Object.keys(adds).forEach((key) => {
        adds[key] = adds[key](yaml)
      })
      // Override all Types with their addedPlugins replacers
      const addedPlusStandard = { ...Types, ...adds }
      newSchema = yaml.Schema.create(Object.keys(addedPlusStandard || []).map((key) => addedPlusStandard[key]).concat(plugins))
    } else {
      newSchema = yaml.Schema.create(Object.keys(Types || []).map((key) => Types[key]).concat(plugins))
    }

    setGlobal({ schema: newSchema })
    return newSchema
  }

  return globalSchema
}

/**
 * Applies the current Exothermic schema to the template string, or array of template strings, and returns a React Component, or array of Components
 * @param {string|[string]} data Template string, or array of template strings
 * @param {{}} opts Options to apply to the template parser
 * @returns {React.Component|[React.Component]} React Component, or array of Components depending on `data`
 */
const apply = (data, opts = {}) => {
  const { loggedIn } = getGlobal()

  let Dashboard = null

  if (loggedIn) {
    if (isBrowser) {
      Dashboard = window.exothermic.dashboard && window.exothermic.options.dashboard.trim().length > 0 ? window.exothermic.dashboard[window.exothermic.options.dashboard.trim()] : null
    } else {
      Dashboard = require(`./dashboard`)
    }
  }

  if (Array.isArray(data)) {
    return data.map((dat) => yaml.safeLoad(dat, {
      schema: Dashboard ? Dashboard.schema(opts) : schema(opts),
    }))
  }

  return yaml.safeLoad(data, {
    schema: Dashboard ? Dashboard.schema(opts) : schema(opts),
  })
}

export { schema as default, apply }
