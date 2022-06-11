import yaml from 'js-yaml'
import { useContext, useEffect, useState } from 'react'
// import { useMatch } from 'react-router-dom'

import { useConfig } from './useConfig'
import { debug } from '~/utils/logger'
import { StateContext } from '../contexts/store'
import { Config, LoadingState, Template } from '../types'
import { useSchema } from './useSchema'

type ExothermicFile = {
  data?: Template
  status: LoadingState
  dat?: {
    load: () => Template
  }
}

type BuiltTemplate = {
  selectedRoute: string
  builtTemplate: Template
  rawTemplate: string
}

const getRoute = (fromRoute: string, config: Config) => {
  // const match = useMatch(fromRoute)
  const cleanup = new RegExp(`${config.basePath}|.html`)
  const baselessRoute = fromRoute.replace(cleanup, '')
  const selectedRoute = baselessRoute.endsWith('/') ? `${baselessRoute}index` : baselessRoute

  if (selectedRoute.endsWith('.exo')) {
    return `${config.basePath ?? ''}/templates/${selectedRoute}`.replace(/\/\/+/, '/')
  }

  return `${config.basePath ?? ''}${config.pagePath ?? '/pages'}/${selectedRoute}.exo`.replace(
    /\/\/+/,
    '/',
  )
}

const checkCache = (selectedRoute: string, cache: Record<string, string>) => {
  if (cache[selectedRoute]) {
    debug(`cache hit: ${selectedRoute}`)
    return Promise.resolve(cache[selectedRoute])
  }

  debug(`cache miss: ${selectedRoute}`)

  return fetch(selectedRoute)
    .then((resp) => resp.text())
    .then((fetchedTemplate) => {
      if (!fetchedTemplate.startsWith('---')) {
        throw new Error('no template found with given name')
      }
      return fetchedTemplate
    })
    .catch(() => '$main: []')
}

const buildTemplate = (
  templateRoute: string,
  config: Config,
  schema: yaml.Schema,
  cache: Record<string, string>,
): Promise<BuiltTemplate> => {
  const selectedRoute = getRoute(templateRoute, config)
  debug(`building route: ${selectedRoute}`)

  return checkCache(selectedRoute, cache).then((template) => {
    // @ts-ignore
    debug(`building template with ${schema.explicit.length} registered tags`)

    const builtTemplate = yaml.load(template, {
      schema,
    }) as Template

    return { selectedRoute, builtTemplate, rawTemplate: template }
  })
}

export const useExothermic = (route: string, isBaseTemplate?: boolean): ExothermicFile => {
  isBaseTemplate = isBaseTemplate ?? route === 'base.exo'
  const { store, dispatch } = useContext(StateContext)
  const [data, setData] = useState<Template>()
  const [status, setStatus] = useState<LoadingState>('LOADING')
  const [currentRoute, setCurrentRoute] = useState(route)
  const schema = useSchema()
  const config = useConfig()

  useEffect(() => {
    if (currentRoute !== route) {
      setStatus('LOADING')
      setCurrentRoute(route)
    }
  }, [route])

  useEffect(() => {
    const { pluginRegistryLoaded } = store

    if (
      route &&
      config &&
      schema &&
      (pluginRegistryLoaded || isBaseTemplate) &&
      status === 'LOADING'
    ) {
      buildTemplate(route, config, schema, store.cache)
        .then(({ builtTemplate, rawTemplate, selectedRoute }) => {
          if (dispatch) {
            dispatch({ type: 'APPEND_CACHE', key: selectedRoute, value: rawTemplate })
          }
          setData(builtTemplate)
          debug(`LOADED: ${route}`)
          setStatus('LOADED')
        })
        .catch((err) => {
          debug(`error: ${err.message}, trying ${route} again`)
        })
    }
  }, [route, config, schema, store.pluginRegistryLoaded, status])

  return {
    data,
    status,
  }
}
