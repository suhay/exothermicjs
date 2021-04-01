import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import { PageFragment } from '../../types'
import { Content } from '../util/content'

export const Section = ({
  class: classProps,
  title,
  id,
  items,
  content,
}: PageFragment) => (
  <section className={classProps ?? ''} id={id}>
    {title && <ReactMarkdown source={title} renderers={{ root: Fragment }} />}
    <Content content={content} />
    {items}
  </section>
)
