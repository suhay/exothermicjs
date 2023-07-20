import { ReactNode } from 'react'

import ReactMarkdown from 'react-markdown'

import { Content, ContentTransform } from '~/components/content/Content'
import { usePageTemplate } from '~/hooks/usePageTemplate'
import { PageFragmentType } from './PageFragment.types'

interface PageFragmentProps {
  children?: ReactNode[]
  data?: Record<string, string>
}

export function PageFragment({
  id,
  title,
  items = [],
  class: classes,
  content,
  as: As = 'div',
  template,
  children,
  data,
}: PageFragmentType & PageFragmentProps) {
  const page = usePageTemplate((state) => state.pageTemplate)

  return (
    <As className={classes} id={id}>
      {!!title && <ReactMarkdown>{title}</ReactMarkdown>}
      {!!content && <Content content={content} as={As.toString()} />}
      {items.map((item, i) => {
        if (typeof item === 'string' && item.startsWith('$')) {
          return page[item] ?? item
        }
        if (item && typeof item === 'object' && 'type' in item) {
          return <item.type {...item.props} data={data} key={`item-${String(i)}}`} />
        }
        return item
      })}
      {!!template && !!data && (
        <ContentTransform template={template} data={data} as={As.toString()} />
      )}
      {children}
    </As>
  )
}
