import { ReactElement } from 'react'

import { PageFragmentType } from '../../types'
import { ContentTransform } from '~/components/content/Content'

export function Foreach({
  data = {},
  items = [],
}: {
  data?: Record<string, any>
  items: ReactElement<PageFragmentType>[]
}) {
  return (
    <>
      {items.map((item, i) => {
        const { props } = item
        if (props.template == null) {
          return null
        }

        return (
          <item.type key={i} {...props}>
            <ContentTransform key={`transform-${i}`} data={data} template={props.template} />
          </item.type>
        )
      })}
    </>
  )
}
