import { useContext, useEffect, useState } from 'react'
import yaml from 'js-yaml'

import { StateContext } from '../contexts/store'
import { debug, error } from '~/utils/logger'
import { retryPromise } from '~/utils/retryPromise'

const load = ({ resolve }) => {
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

export const usePlugins = () => {
  const { store, dispatch } = useContext(StateContext)
  const [pluginRegistryLoaded, setPluginRegistryLoaded] = useState(store.pluginRegistryLoaded)

  useEffect(() => {
    if (store.config) {
      const reg = (store.config.plugins ?? [])
        ?.filter((plugin) => !store.cache[plugin.resolve])
        ?.map((plugin) =>
          retryPromise<LoadedPlugin>({ fn: load }, { resolve: plugin.resolve })
            .then((loadedPlugin) => {
              if (dispatch) {
                dispatch({ type: 'APPEND_CACHE', key: plugin.resolve, value: 'loaded' })
              }
              const yamlTypes = processPlugin(loadedPlugin)

              if (yamlTypes) {
                Object.keys(yamlTypes).forEach((key) => {
                  if (plugin.exclude?.includes(key)) {
                    return
                  }
                  const registeredTagName = plugin.nameMap?.[key] ?? key
                  if (dispatch) {
                    dispatch({
                      type: 'REGISTER_TAG',
                      key: registeredTagName,
                      value: yamlTypes[key](yaml, registeredTagName),
                    })
                  }
                })
              }
            })
            .catch((err) => {
              debug('plugin failed to load')
              error(err)
            }),
        )

      Promise.all(reg).then(() => {
        if (dispatch) {
          dispatch({ type: 'SET_PLUGINS_LOADED' })
        }
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
