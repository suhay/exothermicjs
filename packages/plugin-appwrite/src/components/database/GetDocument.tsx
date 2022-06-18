import { Loading, UserContext } from '@exothermic/core'
import { Button } from '@mui/material'
import { Models } from 'appwrite'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwrieApiDatabase } from '~/types'

export function GetDocument({
  collection,
  items,
  editable,
}: Omit<AppwrieApiDatabase, 'api' | 'action'>) {
  const { user } = useContext(UserContext)
  const [document, setDocument] = useState<Models.Document>()
  const [isAuthor, setIsAuthor] = useState(false)
  const [query] = useSearchParams()
  const appwrite = useAppwrite()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (document) return
    appwrite.getDocument(collection, query.get('id') ?? '')?.then((doc) => {
      const userData = user.data as Models.User<Models.Preferences>
      if (doc.$write.includes(`user:${userData.$id}`)) {
        setIsAuthor(true)
      }
      setDocument(doc)
    })
  }, [])

  const onEdit = useCallback(() => {
    navigate(`${location.pathname}edit?id=${query.get('id') ?? ''}`)
  }, [location, query])

  if (!document) {
    return <Loading />
  }

  const ActionButton = () => {
    if (editable && isAuthor) {
      return <Button onClick={onEdit}>Edit</Button>
    }
    return null
  }

  return (
    <>
      <ActionButton />
      {items?.map((item, i) => {
        return <item.type {...item.props} data={document} key={`item-${i}-${document.$id}`} />
      })}
    </>
  )
}
