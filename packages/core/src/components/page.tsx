import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useExothermic } from '../hooks'
import { state } from '../contexts/store'

export const Page = () => {
  const location = useLocation()
  const { data, status } = useExothermic(location.pathname)
  const { store: { pageTemplate: template, baseTemplate: base }, dispatch } = useContext(state)

  useEffect(() => {
    if (data) {
      const pageTemplate = {
        ...base,
        ...data,
      }
      dispatch({ type: 'SET_PAGE', pageTemplate })
    }
  }, [data])

  if (status === 'LOADING' || !template) {
    return <>Loading...</>
  }

  if (!data) {
    return <p>Page not found!</p>
  }

  return (
    <>
      {template.page}
    </>
  )
}
