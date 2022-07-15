import create from 'zustand'

type Entry = {
  ttl: number
  now: number
  value: string
}

export type Cache = {
  get: (key: string) => string | null
  set: (key: string, value: string, ttl?: number) => void
  cache: Record<string, string>
}

export const useCache = create<Cache>((setItem, getItem) => ({
  get: (key: string) => {
    if (getItem().cache[key]) {
      return getItem().cache[key]
    }

    const entry = JSON.parse(localStorage.getItem(key) || '0') as Entry
    if (!entry) return null

    if (entry.ttl && entry.ttl + entry.now < Date.now()) {
      localStorage.removeItem(key)
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

    localStorage.setItem(
      key,
      JSON.stringify({
        ttl,
        now: Date.now(),
        value,
      }),
    )
  },
  cache: {},
}))
