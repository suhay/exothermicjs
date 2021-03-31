import { guid } from '../util'

export const scriptTags = (scripts: any[]) => {
  if (!scripts.length) {
    return []
  }
  const tags = []
  const scriptBody = []
  scripts.forEach((tag) => {
    if (typeof tag === 'string') {
      tags.push({ src: tag })
      scriptBody.push('')
    } else {
      const keys = Object.keys(tag)
      if (keys.length > 1) { // Not just a key and value
        const script = {}
        for (let i = 0; i < keys.length; i += 1) {
          script[keys[i]] = tag[keys[i]]
        }
        tags.push(script)
        scriptBody.push('')
      } else {
        tags.push({ src: tag[keys[0]] })
        scriptBody.push('')
      }
    }
  })

  return tags.map((item, i) => (
    <script key={`scriptTag-${guid()}`} {...item}>{scriptBody[i]}</script>
  ))
}
