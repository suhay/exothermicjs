import { ReactNode, useMemo, Fragment } from 'react'

import { DateTime } from 'luxon'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Link } from '~/components/navbar/Link'

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

export function applyTemplate(template: string, data: Record<string, ReactNode>): ReactNode {
  if (!template) {
    return null
  }

  let content = template
  let exoContent: ReactNode = null

  Object.entries(data).forEach(([key, val]) => {
    if (val == null) {
      return
    }

    const reg = `({{\\s*${key.replace('$', '\\$')}.*?}})`
    const exp = new RegExp(reg)
    const expg = new RegExp(reg, 'g')
    const templatePartsToReplace = content.match(exp)
    let replaceVal = val

    if (templatePartsToReplace && templatePartsToReplace.length > 0) {
      // Remove the template marks {{ }} and split any filters applied to it
      const parts = templatePartsToReplace[0].replace(/{{|}}/g, '').split('|')

      if (typeof val === 'object' && 'type' in val) {
        exoContent = val
        return
      }

      // We are given an object dot path (some.thing.id)
      if (typeof replaceVal !== 'string' && parts[0].includes('.')) {
        const keyParts = parts[0].split('.')
        for (let i = 1; i < keyParts.length; i += 1) {
          if (replaceVal[keyParts[i].trim()]) {
            replaceVal = replaceVal[keyParts[i].trim()]
          } else {
            replaceVal = ''
          }
          if (typeof replaceVal === 'string') {
            break
          }
        }
      }

      if (parts.length >= 3) {
        switch (parts[1].trim()) {
          case 'dateTime':
            if (typeof replaceVal === 'string') {
              replaceVal = DateTime.fromISO(replaceVal).toFormat(parts[2].trim())
            }
            break
          default:
            break
        }
      }
    }

    if (typeof replaceVal === 'string') {
      content = content.replace(expg, replaceVal)
    }
  })

  if (exoContent) {
    return exoContent
  }

  return content.replace(/\s*{{.*?}}/g, '')
}

export function Content({ content, as }: ContentProps) {
  if (typeof content === 'string') {
    return (
      <ReactMarkdown
        remarkPlugins={[gfm]}
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
