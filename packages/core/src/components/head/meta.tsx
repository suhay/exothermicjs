import { MetaFragment } from '../../types'
import { guid } from '~/utils/guid'

export function Meta({ name, content, attrs }: MetaFragment) {
  if (name && content) {
    return <meta name={name} content={content} />
  }

  if (attrs) {
    const parts = Object.entries(attrs)
    let meta = {}

    if (parts.length > 1 || parts[0].includes('charSet')) {
      parts.forEach(([key, val]) => {
        meta[key] = val
      })
    } else {
      const [partName, partContent] = parts[0]
      meta = {
        name: partName,
        content: partContent,
      }
    }

    return <meta {...meta} />
  }

  return null
}

export const metaTags = (tags?: MetaFragment[]) => {
  const metas = (tags || []).reduce<any[]>((acc, tag) => {
    const keys = Object.keys(tag)

    if (keys.length > 1 || keys.includes('charSet')) {
      const meta = {}

      keys.forEach((key) => {
        meta[key] = tag[key]
      })

      acc.push(meta)
    } else {
      acc.push({ name: keys[0], content: tag[keys[0]] })
    }

    return acc
  }, [])

  return metas.map((item) => <meta key={`metaTag-${guid()}`} {...item} />)
}
