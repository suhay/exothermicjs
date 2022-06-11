import { Suspense, useContext, useEffect, useState } from 'react'

import { StateContext } from '~/contexts/store'
import { useExothermic } from '~/hooks/useExothermic'
import { useConfig } from '~/hooks/useConfig'
import { BootStrap, bootstrap } from '~/utils/bootstrap'
import { Head } from './head/Head'
import { Page } from './Page'
import { Loading } from './utils/Loading'

const initialResource = bootstrap()

function BaseContainer({ resource }: { resource: BootStrap }) {
  useConfig(resource.config.load())
  const { dispatch } = useContext(StateContext)
  const { data: base = null, status } = useExothermic('base.exo')

  useEffect(() => {
    if (base && dispatch) {
      dispatch({ type: 'SET_BASE', template: base })
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

export function Base() {
  const [resource] = useState(initialResource)
  return (
    <Suspense fallback={<Loading />}>
      <BaseContainer resource={resource} />
    </Suspense>
  )
}
