import { useContext, useEffect, useState } from 'react'
import yaml from 'js-yaml'

import { state } from '../contexts/store'
import { debug, error } from '../components/utils'
import { retryPromise } from '../utils'

const load = ({ resolve }) => {
  const loadedPlugin = window[resolve]
  return loadedPlugin ? Promise.resolve(loadedPlugin) : Promise.reject()
}

const processPlugin = (loadedPlugin: {
  register: { tags: Record<string, (jsYaml: any) => yaml.Type> }
}) => {
  if (loadedPlugin.register?.tags) {
    return loadedPlugin.register?.tags as Record<string, (jsYaml: any) => yaml.Type>
  }
  return null
}

export const usePlugins = () => {
  const { store, dispatch } = useContext(state)
  const [pluginRegistryLoaded, setPluginRegistryLoaded] = useState(store.pluginRegistryLoaded)

  useEffect(() => {
    if (store.config) {
      const reg = (store.config.plugins ?? [])
        ?.filter((plugin) => !store.cache[plugin.resolve])
        ?.map((plugin) =>
          retryPromise({ fn: load }, { resolve: plugin.resolve })
            .then((loadedPlugin) => {
              dispatch({ type: 'APPEND_CACHE', key: plugin.resolve, value: 'loaded' })
              const yamlTypes = processPlugin(loadedPlugin)

              if (yamlTypes) {
                Object.keys(yamlTypes).forEach((key) => {
                  dispatch({ type: 'REGISTER_TAG', key, value: yamlTypes[key](yaml) })
                })
              }
            })
            .catch((err) => {
              debug('plugin failed to load')
              error(err)
            }),
        )

      Promise.all(reg).then(() => {
        dispatch({ type: 'SET_PLUGINS_LOADED' })
        setPluginRegistryLoaded(true)
      })
    }
  }, [store.config])

  return {
    pluginRegistryLoaded,
    plugins: {
      tags: store.pluginTags,
      routes: store.pluginRoutes,
    },
  }
}
