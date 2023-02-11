import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Loading } from '~/components/utils/Loading'
import { useLoader } from '~/hooks/useLoader'
import { LinkRenderer } from './Content'

type Props = {
  path: string
}

export function Markdown({ path }: Props) {
  const { data, status } = useLoader(`markdown/${path}.md`)

  if (status === 'LOADING') {
    return <Loading type='shimmer' />
  }

  if (!data) {
    return null
  }

  return (
    <ReactMarkdown
      remarkPlugins={[gfm]}
      components={{
        // eslint-disable-next-line react/no-unstable-nested-components
        a: ({ href, children }) => <LinkRenderer href={href ?? '#'}>{children}</LinkRenderer>,
        // eslint-disable-next-line react/no-unstable-nested-components
        link: ({ href, children }) => <LinkRenderer href={href ?? '#'}>{children}</LinkRenderer>,
      }}
    >
      {data}
    </ReactMarkdown>
  )
}
