import { Fragment, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Link } from '~/components/navbar/Link'

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

export function applyTemplate(template: string, data: Record<string, any>) {
  let content = template
  Object.entries(data).forEach(([key, val]) => {
    const reg = `{{\\s*${key.replace('$', '\\$')}\\s*}}`
    const exp = new RegExp(reg, 'g')
    content = content.replace(exp, val)
  })

  return content
}

export function ContentTransform({
  template,
  data,
}: {
  template: string
  data: Record<string, any>
}) {
  const content = applyTemplate(template, data)
  return <Content content={content} />
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
