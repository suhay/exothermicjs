export const guid = () => `_${Math.random().toString(36).substr(2, 9)}`

export const debug = (msg: string) => {
  if (window.location.hash === '#debug') {
    // eslint-disable-next-line no-console
    console.log(msg)
  }
}

export { Content } from './content'
