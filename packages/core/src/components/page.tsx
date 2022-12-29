import { ReactElement, useContext, useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { UserContext } from '~/contexts/user'
import { useExothermic } from '~/hooks/useExothermic'
import { usePageTemplate } from '~/hooks/usePageTemplate'
import { usePlugins } from '~/hooks/usePlugins'
import * as logger from '~/utils/logger'
import { LoadingState, Template } from '../types'
import { Loading } from './utils/Loading'

function Main({ status, data }: { status: LoadingState; data?: Template }) {
  const { user } = useContext(UserContext)
  const location = useLocation()

  useEffect(() => {
    if (data?.secure) {
      user.isAuthenticated().catch((err) => logger.error(err))
    }
  }, [data, user])

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
    return (
      <div className={`secure-page_${location.pathname.replace(/\/$/, '').replaceAll('/', '_')}`}>
        {secure}
      </div>
    )
  }

  return (
    <>
      {$main ?? page}
      <span />
    </>
  )
}

export function Page() {
  const location = useLocation()
  usePlugins()
  const { data, status } = useExothermic(location.pathname)
  const setPageTemplate = usePageTemplate((state) => state.setPageTemplate)

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

      setPageTemplate(data)
    }
  }, [bottom?.key, data, setPageTemplate, top?.key])

  if (status === 'ERROR') {
    return <section>Page not found.</section>
  }

  return (
    <div className={`page page_${location.pathname.replace(/\/$/, '').replaceAll('/', '_')}`}>
      {top}
      <Main status={status} data={data} />
      {bottom}
    </div>
  )
}
