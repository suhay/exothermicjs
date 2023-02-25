import { openDB } from 'idb'
import create from 'zustand'

import * as logger from '~/utils/logger'

type Entry = {
  ttl: number
  now: number
  value: string
}

const localDb = openDB<Entry>('ExothermicJS Cache', 1, {
  upgrade(db, oldVersion) {
    const migrationV1 = () => {
      if (!db.objectStoreNames.contains('cache')) {
        db.createObjectStore('cache', { keyPath: 'id' })
      }
    }

    switch (oldVersion) {
      case 0:
        migrationV1()
        break
      default:
        logger.error('unable to upgrade cache')
    }
  },
})

export type Cache = {
  get: (key: string) => Promise<string | null>
  set: (key: string, value: string, ttl?: number) => void
  cache: Record<string, string>
}

export const useCache = create<Cache>((setItem, getItem) => ({
  get: async (key: string) => {
    if (getItem().cache[key]) {
      return getItem().cache[key]
    }

    const entry: Entry = await localDb.then((db) => db.get('cache', key)).catch(() => null)

    if (!entry) return null

    if (entry.ttl && entry.ttl + entry.now < Date.now()) {
      localDb.then((db) => db.delete('cache', key)).catch(() => null)
      return null
    }

    return entry.value
  },
  set: (key: string, value: string, ttl?: number) => {
    if (!ttl) {
      const { cache } = getItem()
      cache[key] = value
      setItem({ cache })
      return
    }

    localDb
      .then((db) =>
        db.put('cache', {
          id: key,
          ttl,
          now: Date.now(),
          value,
        }),
      )
      .catch((err) => logger.error(err))
  },
  cache: {},
}))
