import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import { PageFragment } from '../../types'
import { Content } from '../util/content'

export const Header = ({
  class: classProps,
  title,
  items,
  content,
  id,
}: PageFragment) => (
  <header className={classProps ?? 'container'} id={id}>
    {title && <ReactMarkdown source={title} renderers={{ root: Fragment }} />}
    <Content content={content} />
    {items}
  </header>
)
