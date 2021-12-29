import { Fragment, ElementType, useContext } from 'react'
import ReactMarkdown from 'react-markdown'

import { PageFragmentType } from '../../types'
import { Content } from './content'
import { state } from '../../contexts/store'

interface PageFragmentProps<T> {
  as?: T
}

export const PageFragment = <T extends ElementType>({
  id,
  title,
  items = [],
  class: classes,
  content,
  as,
}: PageFragmentType & PageFragmentProps<T>) => {
  const {
    store: { pageTemplate: page },
  } = useContext(state)
  const Component = as ?? 'div'

  return (
    <Component className={classes} id={id}>
      {title && <ReactMarkdown source={title} renderers={{ root: Fragment }} />}
      {content && <Content content={content} />}
      {items.map((item) => {
        if (typeof item === 'string' && item.startsWith('$')) {
          return page[item] ?? item
        }
        return item
      })}
    </Component>
  )
}
