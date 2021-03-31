import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import { useLoader } from '../../hooks'

type Props = {
  path: string
}

export const Markdown = ({ path }: Props) => {
  const { data, status } = useLoader(`markdown/${path}.md`)

  if (status === 'LOADING') {
    return <>Loading...</>
  }

  if (!data) {
    return <></>
  }

  return (
    <ReactMarkdown source={data} escapeHtml={false} renderers={{ root: Fragment }} />
  )
}
