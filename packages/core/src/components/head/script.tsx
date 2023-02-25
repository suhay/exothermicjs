import { ReactNode } from 'react'

import { hexGuid } from '~/utils/guid'

export const scriptTags = (scripts?: Array<string | Record<string, string>>) => {
  if (!scripts) {
    return []
  }

  if (scripts.length === 0) {
    return []
  }

  return scripts.reduce<ReactNode[]>((acc, tag) => {
    if (typeof tag === 'string') {
      acc.push(<script key={tag} src={tag} />)
    } else {
      const keys = Object.keys(tag)
      const key = keys[0]

      if (keys.length > 1) {
        acc.push(<script key={hexGuid(`${key}${tag[key]}`)} {...tag} />)
      } else {
        acc.push(<script key={hexGuid(key)} src={key} />)
      }
    }
    return acc
  }, [])
}
