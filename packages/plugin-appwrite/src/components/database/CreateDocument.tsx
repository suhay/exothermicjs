import { Button } from '@mui/material'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwrieApiDatabase } from '~/types'

export function CreateDocument({ collection, items }: Omit<AppwrieApiDatabase, 'api' | 'action'>) {
  const { handleSubmit, control, setValue } = useForm()
  const appwrite = useAppwrite()
  const [documentId, setDocumentId] = useState<string>()

  const save = async (data: any) => {
    if (documentId) {
      appwrite.updateDocument(collection, documentId, data)
      return
    }
    const doc = await appwrite.createDocument(collection, data)
    if (doc?.$id) {
      setDocumentId(doc.$id)
    }
  }

  return (
    <form>
      <Button onClick={handleSubmit(save)}>Save</Button>
      {items?.map((item, i) => {
        if (item.props.name) {
          return (
            <Controller
              name={item.props.name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <item.type {...item.props} onChange={onChange} value={value} setValue={setValue} />
              )}
              key={`${item.type}-${i}`}
            />
          )
        }
        return (
          <item.type
            {...item.props}
            key={`${item.type}-${i}`}
            control={control}
            setValue={setValue}
          />
        )
      })}
    </form>
  )
}
