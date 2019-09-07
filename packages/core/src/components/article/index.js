import React from 'react'
import ReactMarkdown from 'react-markdown'

import content from '../util/content'

const Article = ({
  data: {
    id,
    title,
    items,
  },
  data,
}) => {
  const classes = data.class ? data.class : ``
  return (
    <article className={classes} id={id}>
      <ReactMarkdown source={title} renderers={{ root: React.Fragment }} />
      {content(data.content)}
      {items}
    </article>
  )
}

export default Article
