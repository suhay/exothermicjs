import {
  ReactElement, useContext, useEffect, useState,
} from 'react'
import { useLocation } from 'react-router-dom'

import { useExothermic, usePlugins } from '../hooks'
import { state } from '../contexts/store'

export const Page = () => {
  const location = useLocation()
  usePlugins()
  const { data, status } = useExothermic(location.pathname)
  const { dispatch } = useContext(state)

  const [top, setTop] = useState<ReactElement>(null)
  const [bottom, setBottom] = useState<ReactElement>(null)

  useEffect(() => {
    if (data) {
      if (top?.key !== data.$top?.key) {
        setTop(data.$top)
      }
      if (bottom?.key !== data.$bottom?.key) {
        setBottom(data.$bottom)
      }

      dispatch({ type: 'SET_PAGE', pageTemplate: data })
    }
  }, [data])

  const main = () => {
    if (status === 'LOADING') {
      return <>Loading...</>
    }

    if (status === 'LOADED' && !data) {
      return <p>Page not found!</p>
    }

    return data.$main ?? data.page
  }

  return (
    <>
      {top}
      {main()}
      {bottom}
    </>
  )
}
