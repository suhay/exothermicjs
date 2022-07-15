import { Loading, UserContext } from '@exothermic/core'
import { Delete, Replay } from '@mui/icons-material'
import { Button, IconButton, Pagination, Stack } from '@mui/material'
import { Models } from 'appwrite'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Context } from '~/contexts/user'
import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwrieApiDatabase } from '../../types'
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
  const userData = user.data as unknown as Models.User<Models.Preferences>

  if (randomize) {
    return (
      <IconButton aria-label='next selection' onClick={() => action()}>
        <Replay />
      </IconButton>
    )
  }

  if (doc?.$write?.includes(`user:${userData.$id}`)) {
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
  randomize = false,
  control,
  setValue,
  allowNew = true,
}: Omit<AppwrieApiDatabase, 'api' | 'action'>) {
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
      const randomPick = range
        ? Math.floor(Math.random() * range)
        : Math.floor(Math.random() * (documents?.total ?? 2))
      const docs = await appwrite.listDocuments({
        collectionId: collection,
        limit: 1,
        offset: randomPick,
      })

      if (docs) {
        setDocuments(docs)
      }
    },
    [setDocuments, collection, documents, appwrite],
  )

  const reload = useCallback(async () => {
    const docs = await appwrite.listDocuments({ collectionId: collection, limit: LIMIT, offset })
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
  }, [])

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
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const { name } = item.props
              if (name && typeof name === 'string' && control) {
                return (
                  <Controller
                    name={name}
                    control={control}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    defaultValue={doc[name]}
                    render={({ field: { onChange } }) => (
                      <item.type
                        {...item.props}
                        onChange={onChange}
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        value={doc[name]}
                        setValue={setValue}
                      />
                    )}
                    key={`${item.type.toString()}-${name}`}
                  />
                )
              }
              return (
                <item.type
                  {...item.props}
                  data={doc}
                  key={`${item.type.toString()}-${i}-${doc.$id}`}
                  control={control}
                  setValue={setValue}
                />
              )
            })}
            <ActionButton
              doc={doc}
              user={user}
              randomize={randomize}
              action={randomize ? reroll : deleteDocument}
            />
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
