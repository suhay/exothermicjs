import { useEffect } from 'react'

import { useBaseTemplate } from '~/hooks/useBaseTemplate'
import { useExothermic } from '~/hooks/useExothermic'
import { useConfig } from '../hooks/useConfig'
import { Head } from './head/Head'
import { Page } from './Page'
import { Loading } from './utils/Loading'

export function Base() {
  const setBaseTemplate = useBaseTemplate((state) => state.setBaseTemplate)
  const config = useConfig()
  const { data: base = null, status } = useExothermic('base.exo')

  useEffect(() => {
    if (base) {
      setBaseTemplate(base, config)
    }
  }, [base, setBaseTemplate, config])

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

// Base.whyDidYouRender = true
