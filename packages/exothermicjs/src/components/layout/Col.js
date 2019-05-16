import React from 'react'

const Col = ({ data }) => {
  const classes = data.class
    ? data.class.startsWith(`col`)
      ? data.class
      : `col ${data.class}`
    : `col`
  return (
    <div className={classes}>
      {data.content}
      {data.items}
    </div>
  )
}

export default Col
