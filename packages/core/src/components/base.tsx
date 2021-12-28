import { Suspense, useContext, useEffect, useState } from 'react'

import { useExothermic, useConfig } from '../hooks'
import { BootStrap, bootstrap } from '../utils/bootstrap'
import { Page } from './page'
import { Head } from './head'
import { state } from '../contexts/store'
import { Loading } from './utils/loading'

const initialResource = bootstrap()

const BaseContainer = ({ resource }: { resource: BootStrap }) => {
  const config = resource.config.load()
  useConfig(config)

  const { dispatch } = useContext(state)
  const { data: base = null, status } = useExothermic('base.exo', true)

  // useEffect(() => {
  //   if (base && config) {
  //     dispatch({ type: 'SET_BASE', baseTemplate: base })
  //   }
  // }, [base, config])

  useEffect(() => {
    if (base) {
      dispatch({ type: 'SET_BASE', baseTemplate: base })
    }
  }, [base])

  if (status === 'LOADING') {
    return <Loading />
  }

  return (
    <>
      <Head />
      <Page />
    </>
  )
}

export const Base = () => {
  const [resource] = useState(initialResource)
  return (
    <Suspense fallback={<Loading />}>
      <BaseContainer resource={resource} />
    </Suspense>
  )
}
