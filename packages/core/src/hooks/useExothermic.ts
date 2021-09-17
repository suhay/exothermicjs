import {
  useContext, useEffect, useState,
} from 'react'
import yaml from 'js-yaml'

import { Template } from '../types'
import { state } from '../contexts/store'
import { debug } from '../components/utils'
import { YamlTypes } from '../types/yaml'

type ExothermicFile = {
  data?: Template
  status: 'LOADING' | 'LOADED'
}

export const useExothermic = (route: string, isBaseTemplate?: boolean): ExothermicFile => {
  const { store, dispatch } = useContext(state)
  const [data, setData] = useState<Template>()
  const [status, setStatus] = useState<'LOADING' | 'LOADED'>('LOADING')
  const [currentRoute, setCurrentRoute] = useState(route)

  useEffect(() => {
    if (!store.schema) {
      const types: yaml.Type[] = (Object.keys(YamlTypes) || []).map((key) => YamlTypes[key])
      const schema = yaml.DEFAULT_SCHEMA.extend(types)
      dispatch({ type: 'SET_SCHEMA', schema })
    }
  }, [])

  useEffect(() => {
    if (currentRoute !== route) {
      setStatus('LOADING')
      setCurrentRoute(route)
    }
  }, [route])

  const getRoute = (fromRoute: string) => {
    const cleanup = new RegExp(`${store.config.basePath}|.html`)
    const baselessRoute = fromRoute.replace(cleanup, '')
    const selectedRoute = baselessRoute.endsWith('/')
      ? `${baselessRoute}index`
      : baselessRoute

    if (selectedRoute.endsWith('.exo')) {
      return `${store.config.basePath ?? ''}/templates/${selectedRoute}`.replace(/\/\/+/, '/')
    }

    return `${store.config.basePath ?? ''}${store.config.pagePath ?? '/pages'}/${selectedRoute}.exo`.replace(/\/\/+/, '/')
  }

  const checkCache = (selectedRoute: string) => {
    if (store.cache[selectedRoute]) {
      debug(`cache hit: ${selectedRoute}`)
      return Promise.resolve(store.cache[selectedRoute])
    }

    debug(`cache miss: ${selectedRoute}`)
    setStatus('LOADING')

    return fetch(selectedRoute)
      .then((resp) => resp.text())
      .then((fetchedTemplate) => {
        if (!fetchedTemplate.startsWith('---')) {
          throw new Error('no template found with given name')
        }
        dispatch({ type: 'APPEND_CACHE', key: selectedRoute, value: fetchedTemplate })
        return fetchedTemplate
      })
      .catch(() => '$main: []')
  }

  const buildTemplate = (
    templateRoute: string,
  ): Promise<Template> => {
    const selectedRoute = getRoute(templateRoute)
    debug(`building route: ${selectedRoute}`)

    return checkCache(selectedRoute)
      .then((template) => {
        // @ts-ignore
        debug(`building template with ${store.schema.explicit.length} registered tags`)

        const builtTemplate = yaml.load(template, {
          schema: store.schema,
        }) as Template

        return builtTemplate
      })
  }

  useEffect(() => {
    const { config, schema, pluginRegistryLoaded } = store

    if (route && config && schema && (pluginRegistryLoaded || isBaseTemplate) && status === 'LOADING') {
      buildTemplate(route)
        .then((builtTemplate: Template) => {
          setData(builtTemplate)
          debug(`LOADED: ${route}`)
          setStatus('LOADED')
        })
        .catch((err) => {
          debug(`error: ${err.message}, trying ${route} again`)
        })
    }
  }, [route, store.config, store.schema, store.pluginRegistryLoaded, status])

  return {
    data,
    status,
  }
}
