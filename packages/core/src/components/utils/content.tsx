import { Fragment, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Link } from '..'

export type ContentProps = {
  content: ReactNode | string
}

function LinkRenderer(props: any) {
  const { href, children }: { href: string; children: any } = props
  if (href.startsWith('/')) {
    return <Link to={href}>{children}</Link>
  }
  return <a href={href}>{children}</a>
}

export function Content({ content }: ContentProps) {
  if (typeof content === 'string') {
    return (
      <ReactMarkdown
        plugins={[gfm]}
        allowDangerousHtml
        // eslint-disable-next-line react/no-children-prop
        children={content}
        renderers={{
          root: Fragment,
          link: LinkRenderer,
        }}
      />
    )
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{content}</>
}
