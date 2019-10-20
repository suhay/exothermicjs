import React from 'react'
import { val, key } from './util'

const Link = ({ links }) => {
  if (!links) {
    return null
  }
  const linkTags = links.map((tag) => {
    if (typeof tag === `string`) {
      return { href: tag, rel: `stylesheet`, type: `text/css` }
    }

    const numTags = Object.keys(tag).length
    if (numTags > 1) { // Not just a key and value
      const link = {}
      for (let i = 0; i < numTags; i++) {
        link[key(tag, i)] = val(tag, i)
      }
      return link
    }
    return { href: val(tag), rel: key(tag) }
  })

  return linkTags.map((item) => (
    <link {...item} />
  ))
}

export default Link
