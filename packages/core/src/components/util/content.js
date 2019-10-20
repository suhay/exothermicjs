import React from 'react'
import ReactMarkdown from 'react-markdown'

import { getGlobal } from 'reactn'

export default (content, opts = null) => {
  if (content) {
    if (typeof content === `string`) {
      const options = opts || getGlobal().options
      let appliedContent = content
      Object.keys(options || []).forEach((key) => {
        const regex = new RegExp(`{{${key}}}`, `gi`)
        appliedContent = appliedContent.replace(regex, options[key])
      })
      return <ReactMarkdown source={appliedContent} renderers={{ root: React.Fragment }} />
    } if (content.content) {
      return <ReactMarkdown source={content.content} renderers={{ root: React.Fragment }} escapeHtml={false} />
    } 
    return <>{content}</>
  } 
  return <></>
}
