import { useContext, useEffect, useState } from 'react'

import { state } from '../contexts/store'

type LoaderFile = {
  data: string;
  status: 'LOADING' | 'LOADED'
}

const buildRoute = (route: string, pagePath?: string) => {
  if (!route.startsWith('/')) {
    return `${pagePath ?? '/pages'}/${route}`.replace(/\/\/+/, '/')
  }

  return route.replace(/\/\/+/, '/')
}

export const useLoader = (route: string): LoaderFile => {
  const { store } = useContext(state)
  const [data, setData] = useState<string>()
  const [status, setStatus] = useState<'LOADING' | 'LOADED'>('LOADING')

  useEffect(() => {
    setStatus('LOADING')

    const selectedRoute = buildRoute(route, store.config?.path)

    fetch(selectedRoute)
      .then((resp) => resp.text())
      .then((file) => {
        setData(file)
        setStatus('LOADED')
      })
  }, [route])

  return {
    data,
    status,
  }
}
