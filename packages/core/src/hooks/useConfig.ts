import { useContext, useEffect, useState } from 'react'

import { StateContext } from '../contexts/store'
import { Config } from '../types'

export const useConfig = (initialConfig?: Config): Config | undefined => {
  const { store, dispatch } = useContext(StateContext)
  const [config, setConfig] = useState<Config>()

  useEffect(() => {
    const { config: storedConfig } = store

    if (!storedConfig) {
      if (initialConfig) {
        setConfig(initialConfig)
        if (dispatch) {
          dispatch({ type: 'SET_CONFIG', config: initialConfig })
        }
      } else {
        fetch('/exothermic.config.json')
          .then((resp) => resp.json())
          .then((file) => {
            setConfig(file)
            if (dispatch) {
              dispatch({ type: 'SET_CONFIG', config: file })
            }
          })
          .catch(() => {
            const defaultConfig = {
              pagePath: '/pages',
            } as Config
            setConfig(defaultConfig)
            if (dispatch) {
              dispatch({ type: 'SET_CONFIG', config: defaultConfig })
            }
          })
      }
    }
  }, [])

  return store.config ?? config
}
