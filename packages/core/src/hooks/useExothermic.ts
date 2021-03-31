import {
  useContext, useEffect, useState,
} from 'react'
import yaml from 'js-yaml'

import { Template } from '../types'
import { state } from '../contexts/store'
import { usePlugins } from './usePlugins'
import { debug } from '../components/util'
import { YamlTypes } from '../types/yaml'

type ExothermicFile = {
  data: Template;
  status: 'LOADING' | 'LOADED'
}

const buildTemplate = (
  template: string,
  schema: yaml.Schema,
): Template => {
  try {
    // @ts-ignore
    debug(`building template with ${schema.explicit.length}`)
    return yaml.load(template, {
      schema,
    }) as Template
  } catch (err) {
    debug(err)
  }

  return undefined
}

const buildRoute = (route: string, pagePath?: string) => {
  const selectedRoute = route.endsWith('/')
    ? `${route}index`
    : route

  if (selectedRoute.includes('.exo')) {
    return `/templates/${selectedRoute}`.replace(/\/\/+/, '/')
  } if (!selectedRoute.includes('.')) {
    return `${pagePath ?? '/pages'}/${selectedRoute}.exo`.replace(/\/\/+/, '/')
  }

  return selectedRoute.replace(/\/\/+/, '/')
}

export const useExothermic = (route: string): ExothermicFile => {
  const { store, dispatch } = useContext(state)
  const [data, setData] = useState<Template>()
  const [status, setStatus] = useState<'LOADING' | 'LOADED'>('LOADING')
  const { pluginRegistryLoaded } = usePlugins(route)

  useEffect(() => {
    if (!store.schema) {
      const types: yaml.Type[] = (Object.keys(YamlTypes) || []).map((key) => YamlTypes[key])
      const builtSchema = yaml.DEFAULT_SCHEMA.extend(types)
      dispatch({ type: 'SET_SCHEMA', schema: builtSchema })
    }
  })

  useEffect(() => {
    setStatus('LOADING')
    const { config, schema, cache } = store

    if (route && config && schema && pluginRegistryLoaded) {
      const selectedRoute = buildRoute(route, config?.path)
      debug(`loading route: ${selectedRoute}`)

      if (cache[selectedRoute]) {
        debug(`cache hit: ${selectedRoute}`)
        const cachedData = cache[selectedRoute]
        const template = buildTemplate(cachedData, schema)
        setData(template)
        setStatus('LOADED')
      } else if (config) {
        debug(`cache miss: ${selectedRoute}`)
        fetch(selectedRoute)
          .then((resp) => resp.text())
          .then((template) => {
            dispatch({ type: 'APPEND_CACHE', key: selectedRoute, value: template })
            return template
          })
          .then((template) => {
            const builtTemplate = buildTemplate(template, schema)
            setData(builtTemplate)
            setStatus('LOADED')
          })
      }
    }
  }, [route, store.config, store.schema, pluginRegistryLoaded])

  return {
    data,
    status,
  }
}
