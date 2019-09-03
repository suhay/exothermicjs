import React from 'react'
import ReactMarkdown from 'react-markdown'

import content from '../util/content'

const Section = ({
  data: {
    id,
    title,
  },
  data,
  children,
  ...rest
}) => {
  const classes = data.class || ``
  return (
    <section className={classes} id={id} {...rest}>
      {title && <ReactMarkdown source={title} renderers={{ root: React.Fragment }} />}
      {content(data.content)}
      {data.items}
      {children}
    </section>
  )
}

export default Section
