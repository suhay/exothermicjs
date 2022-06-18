import { Loading, UserContext } from '@exothermic/core'
import { Button } from '@mui/material'
import { Models } from 'appwrite'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwrieApiDatabase } from '~/types'

export function ListDocuments({
  collection,
  items,
  randomize,
  control,
  setValue,
}: Omit<AppwrieApiDatabase, 'api' | 'action'>) {
  const { user } = useContext(UserContext)
  const [documents, setDocuments] = useState<Models.DocumentList<Models.Document>>()
  const appwrite = useAppwrite()
  const navigate = useNavigate()

  const deleteDocument = (id: string) => {
    appwrite.deleteDocument(collection, id)
  }

  const reroll = useCallback(
    (range?: number) => {
      const randomPick = range
        ? Math.floor(Math.random() * range)
        : Math.floor(Math.random() * (documents?.total ?? 1))
      appwrite
        .listDocuments({ collectionId: collection, limit: 1, offset: randomPick })
        ?.then((docs) => setDocuments(docs))
    },
    [setDocuments, collection],
  )

  const reload = useCallback(() => {
    appwrite.listDocuments({ collectionId: collection, limit: 10 })?.then((docs) => {
      setDocuments(docs)
    })
  }, [collection, setDocuments])

  useEffect(() => {
    appwrite.listDocuments({ collectionId: collection, limit: 10 })?.then((docs) => {
      if (randomize) {
        reroll(docs.total)
        return
      }
      setDocuments(docs)
    })
  }, [collection, randomize])

  if (!documents) {
    return <Loading />
  }

  const ActionButton = ({ doc }: { doc?: any }) => {
    const userData = user.data as Models.User<Models.Preferences>

    if (randomize) {
      return <Button onClick={() => reroll()}>Next</Button>
    } else if (doc?.$write?.includes(`user:${userData.$id}`)) {
      return (
        <Button
          onClick={async () => {
            await deleteDocument(doc.$id)
            reload()
          }}
        >
          Delete
        </Button>
      )
    }
    return null
  }

  return (
    <>
      <Button onClick={() => navigate('/entry/create')}>New entry</Button>
      <ul>
        {documents.documents.map((doc) => {
          return (
            <li key={doc.$id}>
              {items?.map((item, i) => {
                if (item.props.name && control) {
                  return (
                    <Controller
                      name={item.props.name}
                      control={control}
                      defaultValue={doc[item.props.name]}
                      render={({ field: { onChange } }) => (
                        <item.type
                          {...item.props}
                          onChange={onChange}
                          value={doc[item.props.name]}
                          setValue={setValue}
                        />
                      )}
                      key={`${item.type}-${item.props.name}`}
                    />
                  )
                }
                return (
                  <item.type
                    {...item.props}
                    data={doc}
                    key={`${item.type}-${i}-${doc.$id}`}
                    control={control}
                    setValue={setValue}
                  />
                )
              })}
              <ActionButton doc={doc} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
