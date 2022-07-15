import yaml from 'js-yaml'
import { useEffect, useState } from 'react'
import create from 'zustand'

import * as logger from '~/utils/logger'
import { retryPromise } from '~/utils/retryPromise'
import { useCache } from './useCache'
import { useConfig } from './useConfig'
import { useSchema } from './useSchema'

type LoadArgs = { resolve: string }

const load = ({ resolve }: LoadArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const loadedPlugin = window[resolve]
  return loadedPlugin ? Promise.resolve(loadedPlugin) : Promise.reject()
}

type LoadedPlugin = {
  register: {
    tags: Record<string, (jsYaml: any) => yaml.Type>
  }
}

const processPlugin = (loadedPlugin: LoadedPlugin) => {
  if (loadedPlugin.register?.tags) {
    return loadedPlugin.register?.tags as Record<
      string,
      (jsYaml: any, explicitName?: string) => yaml.Type
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
    const newTags = { ...tags }
    newTags[key] = val
    set({ tags: newTags })
  },
  routes: {},
}))

export const usePlugins = () => {
  const config = useConfig()
  const extendSchema = useSchema((state) => state.extendSchema)
  const loaded = useStore((state) => state.pluginRegistryLoaded)
  const setLoaded = useStore((state) => state.setPluginRegistryLoaded)
  const tags = useStore((state) => state.tags)
  const addTag = useStore((state) => state.addTag)
  const routes = useStore((state) => state.routes)
  const [pluginRegistryLoaded, setPluginRegistryLoaded] = useState(loaded)
  const cache = useCache()

  useEffect(() => {
    if (config.pagePath !== '') {
      const reg = (config.plugins ?? [])
        ?.filter((plugin) => !cache.get(plugin.resolve))
        ?.map((plugin) =>
          retryPromise<LoadArgs, LoadedPlugin>({ fn: load }, { resolve: plugin.resolve })
            .then((loadedPlugin) => {
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
            })
            .catch((err) => {
              logger.debug('plugin failed to load')
              logger.error(err)
            }),
        )

      Promise.all(reg)
        .then(() => {
          setLoaded(true)
          setPluginRegistryLoaded(true)
        })
        .catch((err) => logger.error(err))
    }
  }, [addTag, cache, config, extendSchema, setLoaded])

  return {
    pluginRegistryLoaded,
    plugins: {
      tags,
      routes,
    },
  }
}
