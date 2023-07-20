import { ReactElement, useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { useExothermic } from '~/hooks/useExothermic'
import { usePageTemplate } from '~/hooks/usePageTemplate'
import { usePlugins } from '~/hooks/usePlugins'
import { useState as useExoState } from '~/hooks/useState'
import * as logger from '~/utils/logger'
import { LoadingState, Template } from '../types'
import { Loading } from './utils/Loading'

function Main({ status, data }: { status: LoadingState; data?: Template }) {
  const state = useExoState((exoState) => exoState.state)
  const location = useLocation()

  useEffect(() => {
    if (data?.secure && typeof state.isAuthenticated === 'function') {
      state.isAuthenticated().catch((err) => logger.error(err))
    }
  }, [data, state.isAuthenticated])

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

  if (!!secure && state.user == null) {
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
