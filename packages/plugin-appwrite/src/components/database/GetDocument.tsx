import { useCallback, useContext, useEffect, useState } from 'react'

import { Loading, UserContext } from '@exothermic/core'
import Edit from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import { Models, Permission, Role } from 'appwrite'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { Context } from '~/contexts/user'
import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwriteApiDatabase } from '../../types'

function ActionButton({
  doc,
  user,
  editable,
  action,
}: {
  doc?: Models.Document
  user: Context
  editable: boolean
  action: (...args) => void
}) {
  if (!editable) {
    return null
  }

  const userData = user.data as unknown as Models.Account<Models.Preferences>
  const perm = Permission.update(Role.user(userData.$id))
  if (doc?.$permissions?.includes(perm)) {
    return (
      <IconButton aria-label='edit' onClick={() => action(doc.$id)}>
        <Edit />
      </IconButton>
    )
  }
  return null
}

export function GetDocument({
  collection,
  items,
  options,
}: Omit<AppwriteApiDatabase, 'api' | 'action'>) {
  const { editable = false } = options ?? {}
  const { user } = useContext(UserContext)
  const [document, setDocument] = useState<Models.Document>()
  const [query] = useSearchParams()
  const appwrite = useAppwrite()
  const navigate = useNavigate()
  const location = useLocation()

  const load = useCallback(async () => {
    if (!collection) {
      return
    }
    const doc = await appwrite.getDocument(collection, query.get('id') ?? '')
    if (doc) {
      setDocument(doc)
    }
  }, [appwrite, collection, query])

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
      <ActionButton doc={document} editable={!!editable} user={user} action={onEdit} />
      {items?.map((item, i) => (
        <item.type {...item.props} data={document} key={`item-${String(i)}-${document.$id}`} />
      ))}
    </>
  )
}
