import { guid } from '../utils'

export const linkTags = (links: any[] = []) => {
  if (!links.length) {
    return []
  }

  const tags = links.reduce<any[]>((acc, tag) => {
    if (typeof tag === 'string') {
      acc.push({ href: tag, rel: 'stylesheet', type: 'text/css' })
    } else {
      const keys = Object.keys(tag)
      if (keys.length > 1) {
        const link = {}
        keys.forEach((key) => {
          link[key] = tag[key]
        })
        acc.push(link)
      } else {
        acc.push({ href: keys[0], rel: tag[keys[0]] })
      }
    }

    return acc
  }, [])

  return tags.map((item) => (
    <link key={`linkTag-${guid()}`} {...item} />
  ))
}
