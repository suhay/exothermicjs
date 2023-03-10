import { ReactNode, useMemo, Fragment } from 'react'

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import { Link } from '~/components/navbar/Link'
import { applyTemplate } from './utils'

export type ContentProps = {
  content: ReactNode
  as?: string
}

export function LinkRenderer({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith('/')) {
    return <Link to={href}>{children}</Link>
  }
  return <a href={href}>{children}</a>
}

export function Content({ content, as }: ContentProps) {
  if (typeof content === 'string') {
    return (
      <ReactMarkdown
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // eslint-disable-next-line react/no-unstable-nested-components
          a: ({ href, children }) => <LinkRenderer href={href ?? '#'}>{children}</LinkRenderer>,
          // eslint-disable-next-line react/no-unstable-nested-components
          link: ({ href, children }) => <LinkRenderer href={href ?? '#'}>{children}</LinkRenderer>,
          p: as === 'div' || as == null ? 'p' : Fragment,
        }}
      >
        {content}
      </ReactMarkdown>
    )
  }

  return (
    <>
      {content}
      <span />
    </>
  )
}

export function ContentTransform({
  template,
  data,
  as,
}: {
  template: string
  data: Record<string, ReactNode>
  as?: string
}) {
  const content = useMemo(() => applyTemplate(template, data) ?? '', [template, data])
  return <Content content={content} as={as} />
}
