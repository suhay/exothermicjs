import yaml from 'js-yaml'
import { useEffect, useState, useTransition } from 'react'
// import { useMatch } from 'react-router-dom'

import * as logger from '~/utils/logger'
import { SuspendablePromise, suspenseify } from '~/utils/suspendablePromise'
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

const checkCache = async (selectedRoute: string, cache: Cache) => {
  const cachedItem = await cache.get(selectedRoute)
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

const buildTemplate = async (
  templateRoute: string,
  config: Config,
  schema: yaml.Schema,
  cache: Cache,
): Promise<BuiltTemplate> => {
  const selectedRoute = getRoute(templateRoute, config)
  logger.debug(`building route: ${selectedRoute}`)

  const template = await checkCache(selectedRoute, cache)
  const builtTemplate = yaml.load(template, {
    schema,
  }) as Template

  return Promise.resolve<BuiltTemplate>({ selectedRoute, builtTemplate, rawTemplate: template })
}

export const useExothermicWithSuspense = (route: string): SuspendablePromise<Template> => {
  const usingBaseTemplate = route === 'base.exo'
  const [ready, setReady] = useState(false)
  const [currentRoute, setCurrentRoute] = useState<string>()
  const schema = useSchema((state) => state.schema)
  const config = useConfig()
  const plugins = usePlugins()
  const cache = useCache()

  const [data, setData] = useState<SuspendablePromise<Template>>({ load: () => null })
  const [, startTransition] = useTransition()

  useEffect(() => {
    if (config.pagePath !== '' && schema && (plugins.pluginRegistryLoaded || usingBaseTemplate)) {
      setReady(true)
    }
  }, [config.pagePath, plugins.pluginRegistryLoaded, schema, usingBaseTemplate])

  useEffect(() => {
    if (currentRoute !== route) {
      setCurrentRoute(route)
    }
  }, [currentRoute, route])

  useEffect(() => {
    if (!ready) return

    startTransition(() =>
      setData(
        suspenseify<Template>(
          buildTemplate(route, config, schema, cache)
            .then(({ builtTemplate, rawTemplate, selectedRoute }) => {
              if (rawTemplate !== '$main: []') {
                cache.set(selectedRoute, rawTemplate, 30000)
              }
              return new Promise<Template>((resolve) => {
                setTimeout(() => {
                  resolve(builtTemplate)
                }, 500)
              })
            })
            .catch((err: Error) => {
              logger.debug(`error: ${err.message}, trying ${route} again`)
              return {}
            }),
        ),
      ),
    )
  }, [ready, currentRoute, route, config, schema, cache])

  return data
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
  }, [route, config, schema, plugins.pluginRegistryLoaded, usingBaseTemplate])

  useEffect(() => {
    if (currentRoute !== route) {
      setStatus('LOADING')
      setCurrentRoute(route)
    }
  }, [currentRoute, route])

  useEffect(() => {
    if (!ready || status !== 'LOADING') return

    buildTemplate(route, config, schema, cache)
      .then(({ builtTemplate, rawTemplate, selectedRoute }) => {
        if (rawTemplate !== '$main: []') {
          cache.set(selectedRoute, rawTemplate, 30000)
        }
        setData(builtTemplate)
        logger.debug(`LOADED: ${route}`)
        setStatus('LOADED')
      })
      .catch((err: Error) => {
        logger.debug(`error: ${err.message}, trying ${route} again`)
        setStatus('ERROR')
      })
  }, [ready, currentRoute, route, config, schema, cache, status])

  return {
    data,
    status,
  }
}
