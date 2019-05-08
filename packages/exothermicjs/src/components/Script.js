import React, { PureComponent } from 'react'
import { key, val } from './util'

class Script extends PureComponent {
  render() {
    const { scripts } = this.props
    if (!scripts) {
      return null
    }
    const scriptTags = []
    const scriptBody = []
    scripts.forEach((tag) => {
      if (typeof tag === `string`) {
        scriptTags.push({ src: tag })
        scriptBody.push(``)
      } else {
        const numTags = Object.keys(tag).length
        if (numTags > 1) { // Not just a key and value
          const script = {}
          for (let i = 0; i < numTags; i++) {
            script[key(tag, i)] = val(tag, i)
          }
          scriptTags.push(script)
          scriptBody.push(``)
        } else {
          scriptTags.push({ src: val(tag) })
          scriptBody.push(``)
        }
      }
    })

    return scriptTags.map((item, i) => (
      <script {...item}>{scriptBody[i]}</script>
    ))
  }
}

export default Script
