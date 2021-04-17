import {
  useContext, useEffect, useState,
} from 'react'
import yaml from 'js-yaml'

import { Template } from '../types'
import { state } from '../contexts/store'
import { usePlugins } from './usePlugins'
import { debug } from '../components/utils'
import { YamlTypes } from '../types/yaml'

type ExothermicFile = {
  data?: Template
  status: 'LOADING' | 'LOADED'
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

  const getRoute = (fromRoute: string) => {
    const baselessRoute = fromRoute.replace(store.config.basePath, '')
    const selectedRoute = baselessRoute.endsWith('/')
      ? `${baselessRoute}index`
      : baselessRoute

    if (selectedRoute.endsWith('.exo')) {
      return `${store.config.basePath ?? ''}/templates/${selectedRoute}`.replace(/\/\/+/, '/')
    }

    return `${store.config.basePath ?? ''}${store.config.pagePath ?? '/pages'}/${selectedRoute}.exo`.replace(/\/\/+/, '/')
  }

  const buildTemplate = (
    templateRoute: string,
  ): Promise<Template> => new Promise<string>((resolve) => {
    const selectedRoute = getRoute(templateRoute)
    debug(`building route: ${selectedRoute}`)

    if (store.cache[selectedRoute]) {
      debug(`cache hit: ${selectedRoute}`)
      resolve(store.cache[selectedRoute])
    }

    debug(`cache miss: ${selectedRoute}`)
    setStatus('LOADING')
    fetch(selectedRoute)
      .then((resp) => resp.text())
      .then((fetchedTemplate) => {
        dispatch({ type: 'APPEND_CACHE', key: selectedRoute, value: fetchedTemplate })
        resolve(fetchedTemplate)
      })
  })
    .then((template) => {
      // @ts-ignore
      debug(`building template with ${store.schema.explicit.length} registered tags`)
      const builtTemplate = yaml.load(template, {
        schema: store.schema,
      }) as Template

      if (builtTemplate.templates?.length) {
        return Promise.all(builtTemplate.templates.map((parentTemplate) => buildTemplate(parentTemplate)))
          .then((builtParentTemplates) => builtParentTemplates.reduce((acc, parent) => ({
            ...acc,
            page: [
              ...parent.page,
              ...acc.page,
            ],
          }), builtTemplate))
      }

      return Promise.resolve(builtTemplate)
    })

  useEffect(() => {
    const { config, schema } = store

    if (route && config && schema && pluginRegistryLoaded) {
      buildTemplate(route)
        .then((builtTemplate) => {
          setData(builtTemplate)
          setStatus('LOADED')
        })
    } else {
      setStatus('LOADING')
    }
  }, [route, store.config, store.schema, pluginRegistryLoaded])

  return {
    data,
    status,
  }
}
