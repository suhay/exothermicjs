import React, { PureComponent } from 'react'
import { key, val } from './util'

export default class Meta extends PureComponent {
  render() {
    const { tags } = this.props
    if (!tags) {
      return null
    }
    const metaTags = []
    tags.forEach((tag) => {
      const numTags = Object.keys(tag).length
      if (`charSet` in tag || numTags > 1) { // Not just a key and value
        const meta = {}
        for (let i = 0; i < numTags; i++) {
          meta[key(tag, i)] = val(tag, i)
        }
        metaTags.push(meta)
      } else {
        metaTags.push({ name: key(tag), content: val(tag) })
      }
    })

    return metaTags.map(item => (
      <meta {...item} />
    ))
  }
}
