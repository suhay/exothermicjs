import { Loading } from '@exothermic/core'
import { Models } from 'appwrite'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwrieApiDatabase } from '~/types'

export function GetDocument({
  collection,
  items = [],
}: Omit<AppwrieApiDatabase, 'api' | 'action'>) {
  const [document, setDocument] = useState<Models.Document>()
  const [query] = useSearchParams()
  const appwrite = useAppwrite()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (document) return
    appwrite.getDocument(collection, query.get('id') ?? '')?.then((docs) => {
      setDocument(docs)
    })
  }, [])

  const onEdit = useCallback(() => {
    navigate(`${location.pathname}edit?id=${query.get('id') ?? ''}`)
  }, [location, query])

  if (!document) {
    return <Loading />
  }

  return (
    <>
      <button type='button' onClick={onEdit}>
        Edit
      </button>
      {items.map((item, i) => {
        return <item.type {...item.props} data={document} key={`item-${i}-${document.$id}`} />
      })}
    </>
  )
}
