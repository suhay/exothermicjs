import React from 'react'
import { key, val } from './util'

const Meta = ({ tags }) => {
  if (!tags) {
    return null
  }
  const metaTags = tags.map((tag) => {
    const numTags = Object.keys(tag).length
    if (`charSet` in tag || numTags > 1) { // Not just a key and value
      const meta = {}
      for (let i = 0; i < numTags; i++) {
        meta[key(tag, i)] = val(tag, i)
      }
      return meta
    }
    return { name: key(tag), content: val(tag) }
  })

  return metaTags.map((item) => (
    <meta {...item} />
  ))
}

export default Meta
