import { useEffect, useMemo, useState } from 'react'

import yaml from 'js-yaml'
import create from 'zustand'

import * as logger from '~/utils/logger'
import { retryPromise } from '~/utils/retryPromise'
import { useCache } from './useCache'
import { useConfig } from './useConfig'
import { useSchema } from './useSchema'

type LoadArgs = { resolve: string }

const load = ({ resolve }: LoadArgs) => {
  const loadedPlugin = window[resolve]
  return loadedPlugin ? Promise.resolve(loadedPlugin) : Promise.reject()
}

type LoadedPlugin = {
  register: {
    tags: Record<string, (jsYaml: unknown) => yaml.Type>
  }
}

const processPlugin = (loadedPlugin: LoadedPlugin) => {
  if (loadedPlugin.register?.tags) {
    return loadedPlugin.register?.tags as Record<
      string,
      (jsYaml: unknown, explicitName?: string) => yaml.Type
    >
  }
  return null
}

type PluginHook = {
  pluginRegistryLoaded: boolean
  setPluginRegistryLoaded: (pluginRegistryLoaded: boolean) => void
  tags: Record<string, yaml.Type>
  addTag: (key: string, val: yaml.Type) => void
  routes: Record<string, string>
}

const useStore = create<PluginHook>((set, get) => ({
  pluginRegistryLoaded: false,
  setPluginRegistryLoaded: (pluginRegistryLoaded: boolean) => set({ pluginRegistryLoaded }),
  tags: {},
  addTag: (key: string, val: yaml.Type) => {
    const { tags } = get()
    if (tags[key] != null) {
      logger.warn(`There are currently multiple tags registered for: ${key}`)
      return
    }

    const newTags = { ...tags }
    newTags[key] = val
    set({ tags: newTags })
  },
  routes: {},
}))

type PluginRegistry = {
  pluginRegistryLoaded: boolean
  plugins: {
    tags: Record<string, yaml.Type>
    routes: Record<string, string>
  }
}

export const registerPlugin = (plugin) => {
  console.log('registering')
  console.log(plugin)
}

export const usePlugins = (): PluginRegistry => {
  const config = useConfig()
  const extendSchema = useSchema((state) => state.extendSchema)
  const loaded = useStore((state) => state.pluginRegistryLoaded)
  const setLoaded = useStore((state) => state.setPluginRegistryLoaded)
  const tags = useStore((state) => state.tags)
  const addTag = useStore((state) => state.addTag)
  const routes = useStore((state) => state.routes)
  const [pluginRegistryLoaded, setPluginRegistryLoaded] = useState(loaded)
  const cache = useCache()

  const plugins = useMemo(
    () =>
      (config.plugins ?? []).map(async (plugin) => {
        const resolve = await cache.get(plugin.resolve)

        if (resolve == null) {
          const loadedPlugin = await retryPromise<LoadArgs, LoadedPlugin>(
            {
              fn: load,
              onOutOfRetries: () => {
                throw new Error(`Failed to load ${plugin.resolve}`)
              },
            },
            { resolve: plugin.resolve },
          )

          cache.set(plugin.resolve, 'loaded')
          const yamlTypes = processPlugin(loadedPlugin)

          if (yamlTypes) {
            Object.keys(yamlTypes).forEach((key) => {
              if (plugin.exclude?.includes(key)) {
                return
              }
              const registeredTagName = plugin.nameMap?.[key] ?? key
              const newType = yamlTypes[key](yaml, registeredTagName)

              addTag(registeredTagName, newType)
              extendSchema(newType)
            })
          }
        }
      }),
    [addTag, cache, config.plugins, extendSchema],
  )

  useEffect(() => {
    if (config.pagePath === '') {
      return
    }

    Promise.allSettled(plugins)
      .then(() => {
        setLoaded(true)
        setPluginRegistryLoaded(true)
      })
      .catch((err) => {
        logger.error(err)
      })
  }, [config.pagePath, plugins, setLoaded])

  return {
    pluginRegistryLoaded,
    plugins: {
      tags,
      routes,
    },
  }
}
