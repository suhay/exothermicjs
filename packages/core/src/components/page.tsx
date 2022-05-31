import { ReactElement, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useExothermic, usePlugins } from '../hooks'
import { StateContext } from '../contexts/store'
import { Loading } from './utils/loading'
import { LoadingState, Template } from '../types'
import { UserContext } from '../contexts/user'

function Main({ status, data }: { status: LoadingState; data?: Template }) {
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (data) {
      if (data.secure) {
        user.isAuthenticated()
      }
    }
  }, [data])

  if (status === 'LOADING') {
    return <Loading />
  }

  if (status === 'LOADED' && !data) {
    return <p>Page not found!</p>
  }

  if (!data) {
    return <p>Page not found!</p>
  }

  const { $main, page, secure } = data

  if (secure && !user.data) {
    return secure
  }

  return (
    <>
      {user.data && secure}
      {$main ?? page}
    </>
  )
}

export function Page() {
  const location = useLocation()
  usePlugins()
  const { data, status } = useExothermic(location.pathname)
  const { dispatch } = useContext(StateContext)

  const [top, setTop] = useState<ReactElement>()
  const [bottom, setBottom] = useState<ReactElement>()

  useEffect(() => {
    if (data) {
      if (top?.key !== data.$top?.key) {
        setTop(data.$top)
      }
      if (bottom?.key !== data.$bottom?.key) {
        setBottom(data.$bottom)
      }

      if (dispatch) {
        dispatch({ type: 'SET_PAGE', template: data })
      }
    }
  }, [data])

  return (
    <>
      {top}
      <Main status={status} data={data} />
      {bottom}
    </>
  )
}
