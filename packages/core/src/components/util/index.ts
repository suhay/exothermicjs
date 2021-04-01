export const guid = () => `_${Math.random().toString(36).substr(2, 9)}`

export const debug = (msg: string) => {
  if (window.location.host.includes('localhost') || window.location.host.includes('127.0.0.1')) {
    // eslint-disable-next-line no-console
    console.log(msg)
  }
}

export { Content } from './content'
