import { DateTime } from 'luxon'
import { Fragment, ReactNode, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Link } from '~/components/navbar/Link'

export type ContentProps = {
  content: ReactNode
}

function LinkRenderer({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith('/')) {
    return <Link to={href}>{children}</Link>
  }
  return <a href={href}>{children}</a>
}

export function applyTemplate(template: string, data: Record<string, string>) {
  if (!template) return null

  let content = template
  Object.entries(data).forEach(([key, val]) => {
    const reg = `({{\\s*${key.replace('$', '\\$')}(?:\\s|\\|.*?)*}})`
    const exp = new RegExp(reg)
    const expg = new RegExp(reg, 'g')
    const grp = content.match(exp)
    let replaceVal = val

    if (grp?.length) {
      const parts = grp[0].replace(/{{|}}/g, '').split('|')
      if (parts.length === 3) {
        switch (parts[1].trim()) {
          case 'dateTime':
            replaceVal = DateTime.fromISO(replaceVal).toFormat(parts[2].trim())
            break
          default:
            break
        }
      }
    }
    content = content.replace(expg, replaceVal)
  })

  return content
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

export function ContentTransform({
  template,
  data,
}: {
  template: string
  data: Record<string, string>
}) {
  const content = useCallback(() => applyTemplate(template, data) ?? '', [template, data])
  return <Content content={content()} />
}
