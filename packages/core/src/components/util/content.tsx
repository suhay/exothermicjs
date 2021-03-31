import { Fragment, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'

export const Content = ({ content }: { content: ReactNode | string }) => {
  if (typeof content === 'string') {
    const options: string[] = []
    let appliedContent = content
    Object.keys(options || []).forEach((key) => {
      const regex = new RegExp(`{{${key}}}`, 'gi')
      appliedContent = appliedContent.replace(regex, options[key])
    })
    return <ReactMarkdown source={appliedContent} renderers={{ root: Fragment }} />
  }

  return <>{content}</>
}
