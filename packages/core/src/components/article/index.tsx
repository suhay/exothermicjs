import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import { PageFragment } from '../../types'
import { Content } from '../util/content'

export const Article = ({
  id,
  title,
  items,
  class: classes,
  content,
}: PageFragment) => (
  <article className={classes} id={id}>
    <ReactMarkdown source={title} renderers={{ root: Fragment }} />
    <Content content={content} />
    {items}
  </article>
)
