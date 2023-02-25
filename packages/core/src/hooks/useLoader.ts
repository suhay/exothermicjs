import { useEffect, useState } from 'react'

import * as logger from '~/utils/logger'
import { Config, LoadingState } from '../types'
import { useConfig } from './useConfig'

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
  const config = useConfig()
  const [data, setData] = useState<string>('')
  const [status, setStatus] = useState<LoadingState>('LOADING')

  useEffect(() => {
    setStatus('LOADING')

    if (route && config.pagePath !== '') {
      const selectedRoute = buildRoute(route, config)

      fetch(selectedRoute)
        .then((resp) => resp.text())
        .then((file) => {
          setData(file)
          setStatus('LOADED')
        })
        .catch((err) => {
          logger.error(err)
        })
    }
  }, [route, config])

  return {
    data,
    status,
  }
}
