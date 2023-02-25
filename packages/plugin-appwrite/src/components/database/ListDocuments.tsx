import { useCallback, useContext, useEffect, useState } from 'react'

import { Loading, UserContext } from '@exothermic/core'
import Delete from '@mui/icons-material/Delete'
import Replay from '@mui/icons-material/Replay'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { Models, Permission, Query, Role } from 'appwrite'
import { Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Context } from '~/contexts/user'
import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwriteApiDatabase } from '../../types'
import { ConfirmationDialog } from '../dialogs/ConfirmationDialog'

const LIMIT = 10

function ActionButton({
  doc,
  user,
  randomize,
  action,
}: {
  doc?: Models.Document
  user: Context
  randomize: boolean
  action: (...args) => void
}) {
  const userData = user.data as unknown as Models.Account<Models.Preferences>

  if (randomize) {
    return (
      <IconButton aria-label='next selection' onClick={() => action()}>
        <Replay />
      </IconButton>
    )
  }

  const perm = Permission.delete(Role.user(userData.$id))
  if (doc?.$permissions?.includes(perm)) {
    return (
      <IconButton color='error' aria-label='delete' onClick={() => action(doc.$id)}>
        <Delete />
      </IconButton>
    )
  }
  return null
}

export function ListDocuments({
  collection,
  items,
  control,
  setValue,
  options,
}: Omit<AppwriteApiDatabase, 'api' | 'action'>) {
  const { randomize = false, allowNew = true } = options ?? {}

  const { user } = useContext(UserContext)
  const [documents, setDocuments] = useState<Models.DocumentList<Models.Document>>()
  const appwrite = useAppwrite()
  const navigate = useNavigate()
  const [offset, setOffset] = useState(0)
  const [openDelete, setOpenDelete] = useState(false)
  const [idToDelete, setIdToDelete] = useState('')

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setOffset(value * LIMIT - LIMIT)
  }

  const deleteDocument = useCallback(
    async (id: string) => {
      if (!openDelete) {
        setIdToDelete(id)
        setOpenDelete(true)
        return
      }

      await appwrite.deleteDocument(collection, id)
    },
    [openDelete, appwrite, collection],
  )

  const onCloseDelete = () => {
    setOpenDelete(false)
  }

  const reroll = useCallback(
    async (range?: number) => {
      if (!collection) {
        return
      }
      const randomPick = range
        ? Math.floor(Math.random() * range)
        : Math.floor(Math.random() * (documents?.total ?? 2))
      const docs = await appwrite.listDocuments({
        collection,
        queries: [Query.limit(1), Query.offset(randomPick)],
      })

      if (docs) {
        setDocuments(docs)
      }
    },
    [setDocuments, collection, documents, appwrite],
  )

  const reload = useCallback(async () => {
    if (!collection) {
      return
    }
    const docs = await appwrite.listDocuments({
      collection,
      queries: [Query.limit(LIMIT), Query.offset(offset)],
    })
    if (docs) {
      if (randomize) {
        await reroll(docs.total)
        return
      }
      setDocuments(docs)
    }
  }, [appwrite, collection, offset, randomize, reroll])

  const onConfirmDelete = useCallback(async () => {
    await deleteDocument(idToDelete)
    setIdToDelete('')
    setOpenDelete(false)
    await reload()
  }, [deleteDocument, idToDelete, reload])

  useEffect(() => {
    reload().catch(() => null)
  }, []) // <--- Do not change, it will cause an infinite loop

  if (!documents) {
    return <Loading />
  }

  return (
    <>
      {allowNew && <Button onClick={() => navigate('/entry/create')}>Add</Button>}
      <ul>
        {documents.documents.map((doc) => (
          <li key={doc.$id}>
            {items?.map((item, i) => {
              const { name } = item.props
              if (name && typeof name === 'string' && control) {
                return (
                  <Controller
                    name={name}
                    control={control}
                    defaultValue={doc[name]}
                    render={({ field: { onChange } }) => (
                      <item.type
                        {...item.props}
                        onChange={onChange}
                        defaultValue={doc[name]}
                        setValue={setValue}
                      />
                    )}
                    key={`${String(item.type)}-${name}`}
                  />
                )
              }
              return (
                <item.type
                  {...item.props}
                  data={doc}
                  key={`${String(item.type)}-${String(i)}-${doc.$id}`}
                  control={control}
                  setValue={setValue}
                />
              )
            })}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ActionButton
                doc={doc}
                user={user}
                randomize={!!randomize}
                action={randomize ? reroll : deleteDocument}
              />
            </Box>
          </li>
        ))}
        {documents.documents.length === 0 && <span>Nothing to show!</span>}
      </ul>
      {!randomize && documents.total > LIMIT && (
        <Stack spacing={2}>
          <Pagination count={Math.ceil(documents.total / LIMIT)} onChange={handleChange} />
        </Stack>
      )}
      <ConfirmationDialog
        open={openDelete}
        onClose={onCloseDelete}
        onOk={onConfirmDelete}
        title='Are you sure you want to delete this?'
      />
    </>
  )
}
