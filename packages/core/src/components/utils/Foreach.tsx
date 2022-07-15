import { ReactElement } from 'react'

import { ContentTransform } from '~/components/content/Content'
import { PageFragmentType } from '../../types'

export function Foreach({
  data = {},
  items = [],
}: {
  data?: Record<string, string>
  items: ReactElement<PageFragmentType>[]
}) {
  return (
    <>
      {items.map((item, i) => {
        const { template } = item.props
        if (template == null) {
          return null
        }

        return (
          <item.type key={i} {...item.props}>
            <ContentTransform key={`transform-${i}`} data={data} template={template} />
          </item.type>
        )
      })}
    </>
  )
}
