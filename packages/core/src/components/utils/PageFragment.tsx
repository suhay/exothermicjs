import { Fragment, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'

import { Content, ContentTransform } from '~/components/content/Content'
import { usePageTemplate } from '~/hooks/usePageTemplate'
import { PageFragmentType } from '../../types'

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
  as,
  template,
  children,
  data,
}: PageFragmentType & PageFragmentProps) {
  const page = usePageTemplate((state) => state.pageTemplate)
  const Component = as ?? 'div'

  return (
    // @ts-expect-error JSX element type 'Component' does not have any construct or call signatures.
    <Component className={classes} id={id}>
      {!!title && <ReactMarkdown source={title} renderers={{ root: Fragment }} />}
      {!!content && <Content content={content} />}
      {items.map((item) => {
        if (typeof item === 'string' && item.startsWith('$')) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return page[item] ?? item
        }
        return item
      })}
      {!!template && !!data && <ContentTransform template={template} data={data} />}
      {children}
    </Component>
  )
}
