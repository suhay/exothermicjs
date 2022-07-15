import { ReactNode } from 'react'

import { hexGuid } from '~/utils/guid'

export const linkTags = (links?: Array<string | Record<string, string>>) => {
  if (!links?.length) {
    return []
  }

  return links.reduce<ReactNode[]>((acc, tag) => {
    if (typeof tag === 'string') {
      acc.push(<link key={tag} href={tag} rel='stylesheet' type='text/css' />)
    } else {
      const keys = Object.keys(tag)
      const key = keys[0]

      if (keys.length > 1) {
        acc.push(<link key={hexGuid(`${key}${tag[key]}`)} {...tag} />)
      } else {
        acc.push(<link key={hexGuid(key)} href={key} rel={tag[key]} />)
      }
    }

    return acc
  }, [])
}
