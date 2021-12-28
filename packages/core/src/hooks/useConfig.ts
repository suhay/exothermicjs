import { useContext, useEffect, useState } from 'react'

import { state } from '../contexts/store'
import { Config } from '../types'

export const useConfig = (initialConfig?: Config): Config => {
  const { store, dispatch } = useContext(state)
  const [config, setConfig] = useState<Config>()

  useEffect(() => {
    const { config: storedConfig } = store

    if (!storedConfig) {
      if (initialConfig) {
        setConfig(initialConfig)
        dispatch({ type: 'SET_CONFIG', config: initialConfig })
      } else {
        fetch('/exothermic.config.json')
          .then((resp) => resp.json())
          .then((file) => {
            setConfig(file)
            dispatch({ type: 'SET_CONFIG', config: file })
          })
          .catch(() => {
            const defaultConfig = {
              pagePath: '/pages',
            } as Config
            setConfig(defaultConfig)
            dispatch({ type: 'SET_CONFIG', config: defaultConfig })
          })
      }
    }
  }, [])

  return store.config ?? config
}
