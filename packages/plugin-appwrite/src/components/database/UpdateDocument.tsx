import { Loading } from '@exothermic/core'
import { Button } from '@mui/material'
import { Models } from 'appwrite'
import { useEffect, useState, useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwrieApiDatabase } from '../../types'

export function UpdateDocument({ collection, items }: Omit<AppwrieApiDatabase, 'api' | 'action'>) {
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
  }, [])

  if (!document) {
    return <Loading />
  }

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
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              defaultValue={document[name]}
              render={({ field: { onChange, value } }) => (
                <item.type
                  {...item.props}
                  onChange={onChange}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
