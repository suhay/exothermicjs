import { useCallback, useState } from 'react'

import { useState as useExoState } from '@exothermic/core'
import Button from '@mui/material/Button'
import { Models, Permission, Role } from 'appwrite'
import { Controller, useForm } from 'react-hook-form'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwriteApiDatabase } from '../../types'

export function CreateDocument({ collection, items }: Omit<AppwriteApiDatabase, 'api' | 'action'>) {
  const context = useExoState((exoState) => exoState.state)
  const user = context.user as Models.Account<Models.Preferences>
  const { handleSubmit, control, setValue } = useForm()
  const appwrite = useAppwrite()
  const [documentId, setDocumentId] = useState<string>()
  const [isLocal, setIsLocal] = useState(false)

  const sync = useCallback(async () => {
    if (documentId) {
      await appwrite.syncDocumentById(documentId)
    }
  }, [appwrite, documentId])

  const save = useCallback(
    async (data: Record<string, string>) => {
      if (!collection) {
        return
      }
      if (documentId) {
        await appwrite.updateDocument(collection, documentId, data)
        return
      }
      const doc = await appwrite.createDocument(collection, data, [
        Permission.update(Role.user(user.$id)),
        Permission.delete(Role.user(user.$id)),
        Permission.read(Role.user(user.$id)),
      ])
      if (doc?.$id) {
        setDocumentId(doc.$id)
        setIsLocal(!doc.$updatedAt)
      }
    },
    [appwrite, collection, documentId, user.$id],
  )

  return (
    <form>
      {items?.map((item, i) => {
        const { name } = item.props
        if (name && typeof name === 'string') {
          return (
            <Controller
              name={name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <item.type {...item.props} onChange={onChange} value={value} setValue={setValue} />
              )}
              key={`${name}-${String(i)}`}
            />
          )
        }
        return (
          <item.type
            {...item.props}
            key={`${String(item.type)}-${String(i)}`}
            control={control}
            setValue={setValue}
          />
        )
      })}
      <Button onClick={handleSubmit(save)}>Save</Button>
      {isLocal && <Button onClick={sync}>Sync</Button>}
    </form>
  )
}
