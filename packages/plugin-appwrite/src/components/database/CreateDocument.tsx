import { Button } from '@mui/material'
import { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwrieApiDatabase } from '../../types'

export function CreateDocument({ collection, items }: Omit<AppwrieApiDatabase, 'api' | 'action'>) {
  const { handleSubmit, control, setValue } = useForm()
  const appwrite = useAppwrite()
  const [documentId, setDocumentId] = useState<string>()

  const save = useCallback(
    async (data: Record<string, string>) => {
      if (documentId) {
        await appwrite.updateDocument(collection, documentId, data)
        return
      }
      const doc = await appwrite.createDocument(collection, data)
      if (doc?.$id) {
        setDocumentId(doc.$id)
      }
    },
    [appwrite, collection, documentId],
  )

  return (
    <form>
      <Button onClick={handleSubmit(save)}>Save</Button>
      {items?.map((item, i) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { name } = item.props
        if (name && typeof name === 'string') {
          return (
            <Controller
              name={name}
              control={control}
              render={({ field: { onChange, value } }) => (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                <item.type {...item.props} onChange={onChange} value={value} setValue={setValue} />
              )}
              key={`${name}-${i}`}
            />
          )
        }
        return (
          <item.type
            {...item.props}
            key={`${item.type.toString()}-${i}`}
            control={control}
            setValue={setValue}
          />
        )
      })}
    </form>
  )
}
