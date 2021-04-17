import { useContext, useEffect, useState } from 'react'

import { state } from '../contexts/store'
import { Config } from '../types'

export type LoaderFile = {
  data: string;
  status: 'LOADING' | 'LOADED'
}

const buildRoute = (route: string, config: Config) => {
  if (!route.startsWith('/')) {
    return `${config.basePath ?? ''}${config.pagePath ?? '/pages'}/${route}`.replace(/\/\/+/, '/')
  }

  return route.replace(/\/\/+/, '/')
}

export const useLoader = (route: string): LoaderFile => {
  const { store } = useContext(state)
  const [data, setData] = useState<string>()
  const [status, setStatus] = useState<'LOADING' | 'LOADED'>('LOADING')

  useEffect(() => {
    setStatus('LOADING')

    if (route) {
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
