import { useContext, useEffect } from 'react'

import { useExothermic, useConfig } from '../hooks'
import { Page } from './page'
import { Head } from './head'
import { state } from '../contexts/store'

export const Base = () => {
  const { dispatch } = useContext(state)
  const config = useConfig()
  const { data: base, status } = useExothermic('base.exo')

  useEffect(() => {
    if (base && config) {
      dispatch({ type: 'SET_BASE', baseTemplate: base })
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
