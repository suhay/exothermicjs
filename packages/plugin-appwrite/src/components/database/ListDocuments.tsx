import { Loading } from '@exothermic/core'
import { Models } from 'appwrite'
import { useEffect, useState } from 'react'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwrieApiDatabase } from '~/types'

export function ListDocuments({
  collection,
  items = [],
}: Omit<AppwrieApiDatabase, 'api' | 'action'>) {
  const [documents, setDocuments] = useState<Models.DocumentList<Models.Document>>()
  const appwrite = useAppwrite()

  useEffect(() => {
    appwrite.listDocuments(collection)?.then((docs) => setDocuments(docs))
  }, [])

  if (!documents) {
    return <Loading />
  }

  return (
    <ul>
      {documents.documents.map((doc) => {
        return (
          <li key={doc.$id}>
            {items.map((item, i) => {
              return <item.type {...item.props} data={doc} key={`item-${i}-${doc.$id}`} />
            })}
          </li>
        )
      })}
    </ul>
  )
}
