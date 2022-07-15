import { ReactNode } from 'react'

import { hexGuid } from '~/utils/guid'
import { MetaFragment } from '../../types'

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

export const metaTags = (tags?: MetaFragment[]) =>
  (tags || []).reduce<ReactNode[]>((acc, tag) => {
    const recordTag = tag as Record<string, string>
    const keys = Object.keys(tag)
    const key = keys[0]

    if (keys.length > 1 || keys.includes('charSet')) {
      acc.push(<meta key={hexGuid(`${key}${recordTag[key]}`)} {...recordTag} />)
    } else {
      acc.push(<meta key={hexGuid(key)} name={key} content={recordTag[key]} />)
    }

    return acc
  }, [])
