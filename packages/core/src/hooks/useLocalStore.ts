import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IDBPDatabase, openDB } from 'idb'

import * as logger from '~/utils/logger'
import { LocalStore } from '../types'

type Props = {
  storeName: string
  persist?: boolean
}

export const useLocalStore = ({ storeName }: Props): LocalStore => {
  const [name] = useState(storeName)
  const store = useRef<IDBPDatabase<unknown>>()

  const localDb = useMemo(
    () =>
      openDB(name, 1, {
        upgrade(db, oldVersion) {
          const migrationV1 = () => {
            if (!db.objectStoreNames.contains('data')) {
              db.createObjectStore('data')
            }
          }

          switch (oldVersion) {
            case 0:
              migrationV1()
              break
            default:
              logger.error('unable to upgrade local store')
          }
        },
      }).then((db) => {
        store.current = db
        return db
      }),
    [name],
  )

  useEffect(() => store.current?.close(), [store])

  const get = useCallback(
    <T>(key: string) => localDb.then((db) => db?.get('data', key) as T),
    [localDb],
  )

  const add = useCallback(
    (val: unknown, key?: string) =>
      localDb
        .then((db) => db?.add('data', val, key))
        .then((dat) => dat.toString())
        .catch((err) => {
          logger.error(err)
          return null
        }),
    [localDb],
  )

  const put = useCallback(
    (val: unknown, key?: string) =>
      localDb
        .then((db) => db?.put(name, val, key).then((docId) => db.get('data', docId)))
        .catch((err) => {
          logger.error(err)
          return null
        }),
    [localDb, name],
  )

  const del = useCallback((key: string) => localDb.then((db) => db?.delete('data', key)), [localDb])

  const getAll = useCallback(
    (query: Record<string, string>) =>
      localDb
        .then(async (db) => {
          const dataStore = db.transaction('data').store
          let cursor = await dataStore.openCursor()
          const results: any[] = []

          while (true) {
            if (cursor == null) break
            if (
              // eslint-disable-next-line no-loop-func
              Object.entries(query).every(([key, val]) => {
                if (cursor?.value[key] === val) {
                  return true
                }
                return false
              })
            ) {
              results.push({ id: cursor.key, ...cursor.value })
            }
            // eslint-disable-next-line no-await-in-loop
            cursor = await cursor.continue()
          }
          return results
        })
        .catch((err) => {
          logger.error(err)
          return null
        }),
    [localDb],
  )

  return {
    get,
    add,
    del,
    put,
    getAll,
  }
}
