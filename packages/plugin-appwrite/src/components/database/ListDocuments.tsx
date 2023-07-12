import { useCallback, useEffect, useState } from 'react'

import { Loading, useState as useExoState } from '@exothermic/core'
import Delete from '@mui/icons-material/Delete'
import Replay from '@mui/icons-material/Replay'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { Models, Permission, Query, Role } from 'appwrite'
import { Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwriteApiDatabase, AppwriteApiDatabaseOptions } from '../../types'
import { ConfirmationDialog } from '../dialogs/ConfirmationDialog'

function ActionButton({
  doc,
  user,
  randomize,
  action,
}: {
  doc?: Models.Document
  user: any
  randomize: boolean
  action: (...args) => void
}) {
  const userData = user as Models.Account<Models.Preferences>

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
  const {
    randomize = false,
    allowNew = true,
    limit = 10,
  }: AppwriteApiDatabaseOptions = options ?? {}

  const state = useExoState((exoState) => exoState.state)
  const [documents, setDocuments] = useState<Models.Document[]>()
  const appwrite = useAppwrite()
  const navigate = useNavigate()
  const [offset, setOffset] = useState(0)
  const [openDelete, setOpenDelete] = useState(false)
  const [idToDelete, setIdToDelete] = useState('')
  const [hasLocal, setHasLocal] = useState(false)
  const [total, setTotal] = useState(0)

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setOffset(value * limit - limit)
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
        : Math.floor(Math.random() * (total ?? 2))
      const docs = await appwrite.listDocuments({
        collection,
        queries: [Query.limit(1), Query.offset(randomPick)],
      })

      if (docs) {
        setDocuments(docs.documents)
      }
    },
    [collection, total, appwrite],
  )

  const reload = useCallback(async () => {
    if (!collection) {
      return
    }
    const docs = await appwrite.listDocuments({
      collection,
      queries: [Query.limit(limit), Query.offset(offset)],
    })
    if (docs) {
      if (randomize) {
        await reroll(docs.total)
        return
      }
      setDocuments(docs.documents)
      setHasLocal(docs.hasLocal ?? false)
      setTotal(docs.total)
    }
  }, [appwrite, collection, offset, randomize, reroll, limit])

  const onConfirmDelete = useCallback(async () => {
    await deleteDocument(idToDelete)
    setIdToDelete('')
    setOpenDelete(false)
    await reload()
  }, [deleteDocument, idToDelete, reload])

  useEffect(() => {
    reload().catch(() => null)
  }, []) // <--- Do not change, it will cause an infinite loop

  const sync = useCallback(async () => {
    await appwrite.syncAll(collection)
  }, [appwrite, collection])

  if (!documents) {
    return <Loading />
  }

  return (
    <>
      {allowNew && <Button onClick={() => navigate('/entry/create')}>Add</Button>}
      {hasLocal && <Button onClick={() => sync()}>Sync</Button>}
      <ul>
        {documents.map((doc) => (
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
                user={state.user}
                randomize={!!randomize}
                action={randomize ? reroll : deleteDocument}
              />
            </Box>
          </li>
        ))}
        {documents.length === 0 && <span>Nothing to show!</span>}
      </ul>
      {!randomize && total > limit && (
        <Stack spacing={2}>
          <Pagination count={Math.ceil(total / limit)} onChange={handleChange} />
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
