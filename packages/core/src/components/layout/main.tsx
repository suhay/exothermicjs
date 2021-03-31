import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import { PageFragment } from '../../types'
import { Content } from '../util/content'

export const Main = ({
  class: classProps,
  content,
  title,
  items,
  id,
}: PageFragment) => (
  <main className={classProps ?? 'container'} id={id}>
    {title && <ReactMarkdown source={title} renderers={{ root: Fragment }} />}
    <Content content={content} />
    {items}
  </main>
)
