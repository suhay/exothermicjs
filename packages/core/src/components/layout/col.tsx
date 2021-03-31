import { PageFragment } from '../../types'
import { Content } from '../util/content'

export const Col = ({
  class: classProps, content, items, id,
}: PageFragment) => {
  const classes = classProps?.includes('col') ? classProps : `col ${classProps}`

  return (
    <div className={classes} id={id}>
      <Content content={content} />
      {items}
    </div>
  )
}
