import { useEffect, useState, useCallback } from 'react'

import { Loading } from '@exothermic/core'
import Button from '@mui/material/Button'
import { Models } from 'appwrite'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwriteApiDatabase } from '../../types'

export function UpdateDocument({ collection, items }: Omit<AppwriteApiDatabase, 'api' | 'action'>) {
  const { handleSubmit, control, setValue } = useForm()
  const [document, setDocument] = useState<Models.Document>()
  const [documentId, setDocumentId] = useState<string>('')
  const appwrite = useAppwrite()
  const [query] = useSearchParams()

  const save = useCallback(
    async (data: Record<string, string>) => {
      await appwrite.updateDocument(collection, documentId, data)
    },
    [appwrite, collection, documentId],
  )

  useEffect(() => {
    if (document) return
    const id = query.get('id') ?? ''
    setDocumentId(id)
    appwrite
      .getDocument(collection, id)
      ?.then((docs) => {
        setDocument(docs)
      })
      .catch(() => null)
  }, [appwrite, collection, document, query])

  if (!document) {
    return <Loading />
  }

  return (
    <form>
      <Button onClick={handleSubmit(save)}>Save</Button>
      {items?.map((item, i) => {
        const { name } = item.props
        if (name && typeof name === 'string') {
          return (
            <Controller
              name={name}
              control={control}
              defaultValue={document[name]}
              render={({ field: { onChange, value } }) => (
                <item.type
                  {...item.props}
                  onChange={onChange}
                  value={value ?? document[name]}
                  setValue={setValue}
                />
              )}
              key={`${name}-${i}-${document.$id}`}
            />
          )
        }
        return (
          <item.type
            {...item.props}
            data={document}
            key={`${item.type.toString()}-${i}-${document.$id}`}
            setValue={setValue}
          />
        )
      })}
    </form>
  )
}
