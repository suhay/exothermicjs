import { useCallback, useContext, useEffect, useState } from 'react'

import { Loading, UserContext } from '@exothermic/core'
import Button from '@mui/material/Button'
import { Models, Permission, Role } from 'appwrite'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwriteApiDatabase } from '../../types'

function ActionButton({
  editable,
  isAuthor,
  action,
}: {
  editable: boolean
  isAuthor: boolean
  action: () => void
}) {
  if (editable && isAuthor) {
    return <Button onClick={action}>Edit</Button>
  }
  return null
}

export function GetDocument({
  collection,
  items,
  editable = false,
}: Omit<AppwriteApiDatabase, 'api' | 'action'>) {
  const { user } = useContext(UserContext)
  const [document, setDocument] = useState<Models.Document>()
  const [isAuthor, setIsAuthor] = useState(false)
  const [query] = useSearchParams()
  const appwrite = useAppwrite()
  const navigate = useNavigate()
  const location = useLocation()

  const load = useCallback(async () => {
    const doc = await appwrite.getDocument(collection, query.get('id') ?? '')
    if (doc) {
      const userData = user.data as Models.Account<Models.Preferences>
      const perm = Permission.write(Role.user(userData.$id))

      if (doc.$permissions.includes(perm)) {
        setIsAuthor(true)
      }
      setDocument(doc)
    }
  }, [appwrite, collection, query, user.data])

  useEffect(() => {
    if (document) return
    load().catch(() => null)
  }, [document, load])

  const onEdit = useCallback(() => {
    navigate(`${location.pathname}edit?id=${query.get('id') ?? ''}`)
  }, [location.pathname, navigate, query])

  if (!document) {
    return <Loading />
  }

  return (
    <>
      <ActionButton editable={editable} isAuthor={isAuthor} action={onEdit} />
      {items?.map((item, i) => (
        <item.type {...item.props} data={document} key={`item-${i}-${document.$id}`} />
      ))}
    </>
  )
}
