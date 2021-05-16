import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

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
    // eslint-disable-next-line react/no-children-prop
    <ReactMarkdown plugins={[gfm]} allowDangerousHtml children={data} renderers={{ root: Fragment }} />
  )
}
