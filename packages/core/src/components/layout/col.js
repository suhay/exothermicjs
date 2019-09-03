import React from 'react'

import content from '../util/content'

const Col = ({ data }) => {
  const classes = data.class
    ? data.class.startsWith(`col`)
      ? data.class
      : `col ${data.class}`
    : `col`
  return (
    <div className={classes}>
      {content(data.content)}
      {data.items}
    </div>
  )
}

export default Col
