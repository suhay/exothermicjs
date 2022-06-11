import { Loading } from '@exothermic/core'
import { Models } from 'appwrite'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'
import { SlateRichTextEditor } from './SlateRichTextEditor'

export function UpdateDocument({ collection }) {
  const [document, setDocument] = useState<Models.Document>()
  const [documentId, setDocumentId] = useState<string>('')
  const appwrite = useAppwrite()
  const [query] = useSearchParams()
  const [text, setText] = useState<string>('')

  const save = useCallback(() => {
    appwrite.updateDocument(collection, documentId, { body: text })
  }, [collection, documentId, text])

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
    <>
      <button type='button' onClick={save}>
        Save
      </button>
      {/* @ts-ignore */}
      <SlateRichTextEditor value={document.body} setValue={setText} />
    </>
  )
}
