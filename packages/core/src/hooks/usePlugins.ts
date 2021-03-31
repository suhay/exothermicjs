import { useContext, useEffect, useState } from 'react'
import yaml from 'js-yaml'

import { state } from '../contexts/store'
import { debug } from '../components/util';

const retry = (): Promise<void> => new Promise((resolve, reject) => {
  setTimeout(reject.bind(null), 500);
})

const load = (resolve) => {
  const loadedPlugin = window[resolve]

  if (loadedPlugin) {
    return Promise.resolve(loadedPlugin)
  }

  return Promise.reject()
}

export const usePlugins = (route: string) => {
  const { store, dispatch } = useContext(state)
  const [pluginRegistryLoaded, setPluginRegistryLoaded] = useState(false)

  const processPlugin = (loadedPlugin) => {
    if (loadedPlugin.register?.tags) {
      const yamlTypes = loadedPlugin.register?.tags as Record<string, (jsYaml: any) => yaml.Type>
      Object.keys(yamlTypes).forEach((key) => {
        dispatch({ type: 'REGISTER_TAG', key, value: yamlTypes[key](yaml) })
      })
    }
  }

  useEffect(() => {
    if (store.config && !route.includes('base.exo')) {
      const reg = store.config?.plugins
        ?.filter((plugin) => !store.cache[plugin.resolve])
        ?.map((plugin) => load(plugin.resolve)
          .catch(retry)
          .catch(() => load(plugin.resolve))
          .catch(retry)
          .catch(() => load(plugin.resolve))
          .catch(retry)
          .catch(() => load(plugin.resolve))
          .catch(retry)
          .catch(() => load(plugin.resolve))
          .catch(retry)
          .catch(() => load(plugin.resolve))
          .then((loadedPlugin) => {
            dispatch({ type: 'APPEND_CACHE', key: plugin.resolve, value: 'loaded' })
            processPlugin(loadedPlugin)
          })
          .catch(() => debug('plugin failed to load')))

      Promise.all(reg)
        .then(() => {
          setPluginRegistryLoaded(true)
        })
    } else {
      setPluginRegistryLoaded(true)
    }
  }, [store.config])

  return {
    pluginRegistryLoaded,
  }
}
