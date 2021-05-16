import { PageFragmentType } from '../../types'
import { Content } from '../utils/content'

export const Col = ({
  class: classProps, content, items, id,
}: PageFragmentType) => {
  const classes = classProps?.includes('col') ? classProps : `col ${classProps ?? ''}`

  return (
    <div className={classes} id={id}>
      <Content content={content} />
      {items}
    </div>
  )
}
