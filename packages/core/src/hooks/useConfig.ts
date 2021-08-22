import {
  useContext, useEffect, useState,
} from 'react'

import { state } from '../contexts/store'
import { Config } from '../types'

export const useConfig = (): Config => {
  const { store, dispatch } = useContext(state)
  const [config, setConfig] = useState<Config>()

  useEffect(() => {
    const { config: storedConfig } = store

    if (!storedConfig) {
      fetch('/exothermic.config.json')
        .then((resp) => resp.json())
        .then((file) => {
          setConfig(file)
          dispatch({ type: 'SET_CONFIG', config: file })
        })
    }
  }, [])

  return store.config ?? config
}
