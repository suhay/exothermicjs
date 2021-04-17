import { Fragment, ElementType } from 'react'
import ReactMarkdown from 'react-markdown'

import { PageFragmentType } from '../../types'
import { Content } from './content'

interface PageFragmentProps<T> {
  as?: T
}

export const PageFragment = <T extends ElementType>({
  id,
  title,
  items,
  class: classes,
  content,
  as,
}: PageFragmentType & PageFragmentProps<T>) => {
  const Component = as ?? 'div'
  return (
    <Component className={classes} id={id}>
      <ReactMarkdown source={title} renderers={{ root: Fragment }} />
      <Content content={content} />
      {items}
    </Component>
  )
}
