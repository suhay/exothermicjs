// import yaml from 'js-yaml'

import { Config } from '../types'

export type BootStrap = {
  config: {
    load: () => Config
  }
}

const wrapPromise = <T>(promise: Promise<T>) => {
  let status: 'LOADING' | 'ERROR' | 'LOADED' = 'LOADING'
  let result: T
  const suspender = promise.then(
    (r: T) => {
      status = 'LOADED'
      result = r
    },
    (e: any) => {
      status = 'ERROR'
      result = e
    },
  )
  return {
    load() {
      if (status === 'LOADING') {
        throw suspender
      } else if (status === 'ERROR') {
        throw result
      } else if (status === 'LOADED') {
        return result
      }
      return null
    },
  }
}

const fetchConfig = () =>
  fetch('/exothermic.config.json')
    .then((resp) => resp.json())
    .then((file) => file as Config)
    .catch(
      () =>
        ({
          pagePath: '/pages',
        } as Config),
    )

// const load = ({ resolve }) => {
//   const loadedPlugin = window[resolve]
//   return loadedPlugin ? Promise.resolve(loadedPlugin) : Promise.reject()
// }

// const processPlugin = (loadedPlugin) => {
//   if (loadedPlugin.register?.tags) {
//     const yamlTypes = loadedPlugin.register?.tags as Record<string, (jsYaml: any) => yaml.Type>
//     Object.keys(yamlTypes).forEach((key) => {
//       dispatch({ type: 'REGISTER_TAG', key, value: yamlTypes[key](yaml) })
//     })
//   }
// }

export const bootstrap = (): BootStrap => {
  const configPromise = fetchConfig()
  // .then((config) => {
  //   if (config) {
  //     const reg = (config.plugins ?? [])?.map((plugin) =>
  //       retryPromise({ fn: load }, { resolve: plugin.resolve })
  //         .then((loadedPlugin) => {
  //           dispatch({ type: 'APPEND_CACHE', key: plugin.resolve, value: 'loaded' })
  //           processPlugin(loadedPlugin)
  //         })
  //         .catch(() => debug('plugin failed to load')),
  //     )

  //     Promise.all(reg).then(() => {
  //       dispatch({ type: 'SET_PLUGINS_LOADED' })
  //       setPluginRegistryLoaded(true)
  //     })
  //   }
  // })
  return {
    config: wrapPromise(configPromise),
  }
}
