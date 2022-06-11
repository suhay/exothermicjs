import { ElementType, Fragment, useContext } from 'react'
import ReactMarkdown from 'react-markdown'

import { StateContext } from '~/contexts/store'
import { PageFragmentType } from '../../types'
import { Content, ContentTransform } from '~/components/content/Content'

interface PageFragmentProps<T> {
  as?: T
  children?: any
  template?: string
  data?: Record<string, any>
}

export function PageFragment<T extends ElementType>({
  id,
  title,
  items = [],
  class: classes,
  content,
  as,
  template,
  children,
  data,
}: PageFragmentType & PageFragmentProps<T>) {
  const {
    store: { pageTemplate: page },
  } = useContext(StateContext)
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
      {template && data && <ContentTransform template={template} data={data} />}
      {children}
    </Component>
  )
}
