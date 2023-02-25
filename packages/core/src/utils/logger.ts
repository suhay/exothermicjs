/* eslint-disable no-console */

export const debug = (msg: string) => {
  if (window.location.search === '?debug') {
    console.log(msg)
  }
}

export const info = (msg: string) => {
  console.info(msg)
}

export const warn = (msg: string) => {
  console.warn(msg)
}

export const error = (err: any) => {
  console.error(err)
}
