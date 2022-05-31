import { LoadingState } from '../types'

export const wrapPromise = <T>(promise: Promise<T>) => {
  let status: LoadingState = 'LOADING'
  let result: T
  const suspender = promise.then(
    (r: T) => {
      status = 'LOADED'
      result = r
    },
    (e: any) => {
      status = 'ERROR'
      result = e
    },
  )
  return {
    load() {
      if (status === 'LOADING') {
        throw suspender
      } else if (status === 'ERROR') {
        throw result
      } else if (status === 'LOADED') {
        return result
      }
      return undefined
    },
  }
}
