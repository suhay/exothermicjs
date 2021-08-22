import { Fragment, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export type ContentProps = {
  content: ReactNode | string
}

export const Content = ({ content }: ContentProps) => {
  if (typeof content === 'string') {
    // eslint-disable-next-line react/no-children-prop
    return <ReactMarkdown plugins={[gfm]} allowDangerousHtml children={content} renderers={{ root: Fragment }} />
  }

  return <>{content}</>
}
