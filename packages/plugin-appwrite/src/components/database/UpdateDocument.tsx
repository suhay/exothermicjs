import { Loading } from '@exothermic/core'
import { Button } from '@mui/material'
import { Models } from 'appwrite'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwrieApiDatabase } from '~/types'

export function UpdateDocument({ collection, items }: Omit<AppwrieApiDatabase, 'api' | 'action'>) {
  const { handleSubmit, control, setValue } = useForm()
  const [document, setDocument] = useState<Models.Document>()
  const [documentId, setDocumentId] = useState<string>('')
  const appwrite = useAppwrite()
  const [query] = useSearchParams()

  const save = async (data: any) => {
    appwrite.updateDocument(collection, documentId, data)
  }

  useEffect(() => {
    if (document) return
    const id = query.get('id') ?? ''
    setDocumentId(id)
    appwrite.getDocument(collection, id)?.then((docs) => {
      setDocument(docs)
    })
  }, [])

  if (!document) {
    return <Loading />
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
              defaultValue={document[item.props.name]}
              render={({ field: { onChange, value } }) => (
                <item.type
                  {...item.props}
                  onChange={onChange}
                  value={value ?? document[item.props.name]}
                  setValue={setValue}
                />
              )}
              key={`${item.type}-${i}-${document.$id}`}
            />
          )
        }
        return (
          <item.type
            {...item.props}
            data={document}
            key={`${item.type}-${i}-${document.$id}`}
            setValue={setValue}
          />
        )
      })}
    </form>
  )
}
