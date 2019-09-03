import React from 'react'
import ReactMarkdown from 'react-markdown'

const Article = ({
  data: {
    id,
    title,
    content,
    items,
  },
  data,
}) => {
  const classes = data.class ? data.class : ``
  return (
    <article className={classes} id={id}>
      <ReactMarkdown source={title} renderers={{ root: React.Fragment }} />
      {content}
      {items}
    </article>
  )
}

export default Article
