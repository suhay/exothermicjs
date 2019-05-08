import React, { PureComponent } from 'react'
import { val, key } from './util'

class Link extends PureComponent {
  render() {
    const { links } = this.props
    if (!links) {
      return null
    }
    const linkTags = []
    links.forEach((tag) => {
      if (typeof tag === `string`) {
        linkTags.push({ href: tag, rel: `stylesheet`, type: `text/css` })
      } else {
        const numTags = Object.keys(tag).length
        if (numTags > 1) { // Not just a key and value
          const link = {}
          for (let i = 0; i < numTags; i++) {
            link[key(tag, i)] = val(tag, i)
          }
          linkTags.push(link)
        } else {
          linkTags.push({ href: val(tag), rel: key(tag) })
        }
      }
    })

    return linkTags.map(item => (
      <link {...item} />
    ))
  }
}

export default Link
