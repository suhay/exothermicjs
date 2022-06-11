import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Loading } from '~/components/utils/Loading'
import { useLoader } from '~/hooks/useLoader'

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
      plugins={[gfm]}
      allowDangerousHtml
      // eslint-disable-next-line react/no-children-prop
      children={data}
      renderers={{ root: Fragment }}
    />
  )
}
