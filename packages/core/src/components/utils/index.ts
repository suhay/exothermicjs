export const guid = () => `_${Math.random().toString(36).substr(2, 9)}`

export const debug = (msg: string) => {
  if (window.location.search === '?debug') {
    // eslint-disable-next-line no-console
    console.log(msg)
  }
}

export const error = (err: any) => {
  // eslint-disable-next-line no-console
  console.error(err)
}

export { Content } from './content'
export { PageFragment as Fragment } from './fragment'
export { Get } from './get'
export { Loading } from './loading'
export { Markdown } from './markdown'
