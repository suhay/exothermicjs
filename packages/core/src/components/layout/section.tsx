import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import { PageFragmentType } from '../../types'
import { Content } from '../utils/content'

export const Section = ({
  class: classProps,
  title,
  id,
  items,
  content,
}: PageFragmentType) => (
  <section className={classProps ?? ''} id={id}>
    {title && <ReactMarkdown source={title} renderers={{ root: Fragment }} />}
    <Content content={content} />
    {items}
  </section>
)
