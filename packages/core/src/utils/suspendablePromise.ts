import { LoadingState } from '../types'

export type SuspendablePromise<T> = {
  load: () => T | undefined | null
}

export const suspenseify = <T>(promise: Promise<T>): SuspendablePromise<T> => {
  let status: LoadingState = 'LOADING'
  let result: T
  let error: Error
  const suspender = promise.then(
    (r: T) => {
      status = 'LOADED'
      result = r
    },
    (e: Error) => {
      status = 'ERROR'
      error = e
    },
  )
  return {
    load() {
      if (status === 'LOADING') {
        throw suspender
      } else if (status === 'ERROR') {
        throw error
      } else if (status === 'LOADED') {
        return result
      }
      return undefined
    },
  }
}
