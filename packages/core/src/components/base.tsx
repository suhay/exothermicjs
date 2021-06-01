import { useContext, useEffect, useState } from 'react'

import { useExothermic, useConfig } from '../hooks'
import { Page } from './page'
import { Head } from './head'
import { state } from '../contexts/store'

export const Base = () => {
  const { dispatch } = useContext(state)
  const config = useConfig()
  const { data: base = null, status } = useExothermic('base.exo', true)
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) {
      dispatch({ type: 'SET_BASE', baseTemplate: base })
    }
  }, [ready])

  useEffect(() => {
    if (base && config && !ready) {
      setReady(true)
    }
  }, [base, config])

  if (status === 'LOADING') {
    return <>Loading...</>
  }

  return (
    <>
      <Head />
      <Page />
    </>
  )
}
