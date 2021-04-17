import { Fragment, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export type ContentProps = {
  content: ReactNode | string
}

export const Content = ({ content }: ContentProps) => {
  if (typeof content === 'string') {
    const options: string[] = []
    let appliedContent = content
    Object.keys(options || []).forEach((key) => {
      const regex = new RegExp(`{{${key}}}`, 'gi')
      appliedContent = appliedContent.replace(regex, options[key])
    })
    // eslint-disable-next-line react/no-children-prop
    return <ReactMarkdown plugins={[gfm]} children={appliedContent} renderers={{ root: Fragment }} />
  }

  return <>{content}</>
}
