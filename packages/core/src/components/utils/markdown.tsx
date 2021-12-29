import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { useLoader } from '../../hooks'
import { Loading } from './loading'

type Props = {
  path: string
}

export const Markdown = ({ path }: Props) => {
  const { data, status } = useLoader(`markdown/${path}.md`)

  if (status === 'LOADING') {
    return <Loading type='shimmer' />
  }

  if (!data) {
    return <></>
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
