import React from 'react'
import ReactMarkdown from 'react-markdown'

import { getGlobal } from 'reactn'

export default (content) => {
  if (content && typeof content === `string`) {
    const { options } = getGlobal()
    let appliedContent = content
    Object.keys(options || []).forEach((key) => {
      const regex = new RegExp(`{{${key}}}`, `gi`)
      appliedContent = appliedContent.replace(regex, options[key])
    })
    return <ReactMarkdown source={appliedContent} renderers={{ root: React.Fragment }} />
  } else if (content) {
    return <>{content}</>
  }
  return <></>
}
