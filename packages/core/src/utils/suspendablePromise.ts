import { LoadingState } from '../types'

export const wrapPromise = <T>(promise: Promise<T>) => {
  let status: LoadingState = 'LOADING'
  let result: T
  let error: any
  const suspender = promise.then(
    (r: T) => {
      status = 'LOADED'
      result = r
    },
    (e: any) => {
      status = 'ERROR'
      error = e
    },
  )
  return {
    load() {
      if (status === 'LOADING') {
        throw suspender
      } else if (status === 'ERROR') {
        throw result
      } else if (status === 'LOADED') {
        return error
      }
      return undefined
    },
  }
}
