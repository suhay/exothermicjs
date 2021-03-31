import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import { PageFragment } from '../../types'
import { Content } from '../util/content'

export const Footer = ({
  class: classProps,
  content,
  title,
  items,
  id,
}: PageFragment) => (
  <footer className={classProps ?? 'container'} id={id}>
    {title && <ReactMarkdown source={title} renderers={{ root: Fragment }} />}
    <Content content={content} />
    {items}
  </footer>
)
