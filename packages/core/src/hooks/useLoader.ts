import { useContext, useEffect, useState } from 'react'

import { StateContext } from '~/contexts/store'
import { Config, LoadingState } from '../types'

export type LoaderFile = {
  data: string
  status: LoadingState
}

const buildRoute = (route: string, config: Config) => {
  if (!route.startsWith('/')) {
    return `${config.basePath ?? ''}${config.pagePath ?? '/pages'}/${route}`.replace(/\/\/+/, '/')
  }

  return route.replace(/\/\/+/, '/')
}

export const useLoader = (route?: string): LoaderFile => {
  const { store } = useContext(StateContext)
  const [data, setData] = useState<string>('')
  const [status, setStatus] = useState<LoadingState>('LOADING')

  useEffect(() => {
    setStatus('LOADING')

    if (route && store.config) {
      const selectedRoute = buildRoute(route, store.config)

      fetch(selectedRoute)
        .then((resp) => resp.text())
        .then((file) => {
          setData(file)
          setStatus('LOADED')
        })
    }
  }, [route])

  return {
    data,
    status,
  }
}
