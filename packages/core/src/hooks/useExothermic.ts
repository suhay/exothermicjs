import yaml from 'js-yaml'
import { useEffect, useState } from 'react'
// import { useMatch } from 'react-router-dom'

import * as logger from '~/utils/logger'
import { Config, LoadingState, Template } from '../types'
import { useCache, Cache } from './useCache'
import { useConfig } from './useConfig'
import { usePlugins } from './usePlugins'
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
  const cleanup = new RegExp(`${config.basePath ?? ''}|.html`)
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

const checkCache = (selectedRoute: string, cache: Cache) => {
  const cachedItem = cache.get(selectedRoute)
  if (cachedItem) {
    logger.debug(`cache hit: ${selectedRoute}`)
    return Promise.resolve(cachedItem)
  }

  logger.debug(`cache miss: ${selectedRoute}`)

  return fetch(selectedRoute)
    .then((resp) => resp.text())
    .then((fetchedTemplate) => {
      if (!fetchedTemplate.startsWith('---')) {
        throw new Error('no template found with given name')
      }
      return fetchedTemplate
    })
    .catch((err) => {
      logger.error(err)
      return '$main: []'
    })
}

const buildTemplate = (
  templateRoute: string,
  config: Config,
  schema: yaml.Schema,
  cache: Cache,
): Promise<BuiltTemplate> => {
  const selectedRoute = getRoute(templateRoute, config)
  logger.debug(`building route: ${selectedRoute}`)

  return checkCache(selectedRoute, cache).then((template) => {
    // @ts-expect-error Property 'explicit' does not exist on type 'Schema'.
    logger.debug(`building template with ${schema.explicit.length} registered tags`)

    const builtTemplate = yaml.load(template, {
      schema,
    }) as Template

    return { selectedRoute, builtTemplate, rawTemplate: template }
  })
}

export const useExothermic = (route: string): ExothermicFile => {
  const usingBaseTemplate = route === 'base.exo'
  const [ready, setReady] = useState(false)
  const [currentRoute, setCurrentRoute] = useState<string>()
  const schema = useSchema((state) => state.schema)
  const config = useConfig()
  const plugins = usePlugins()
  const cache = useCache()

  const [data, setData] = useState<Template>()
  const [status, setStatus] = useState<LoadingState>('LOADING')

  useEffect(() => {
    if (config.pagePath !== '' && schema && (plugins.pluginRegistryLoaded || usingBaseTemplate)) {
      setReady(true)
    }
  }, [route, config, schema, plugins.pluginRegistryLoaded])

  useEffect(() => {
    if (currentRoute !== route) {
      setStatus('LOADING')
      setCurrentRoute(route)
    }
  }, [route])

  useEffect(() => {
    if (!ready) return

    buildTemplate(route, config, schema, cache)
      .then(({ builtTemplate, rawTemplate, selectedRoute }) => {
        if (rawTemplate !== '$main: []') {
          cache.set(selectedRoute, rawTemplate, 30000)
        }
        setData(builtTemplate)
        logger.debug(`LOADED: ${route}`)
        setStatus('LOADED')
      })
      .catch((err) => {
        logger.debug(`error: ${err.message}, trying ${route} again`)
      })
  }, [ready, currentRoute])

  return {
    data,
    status,
  }
}
