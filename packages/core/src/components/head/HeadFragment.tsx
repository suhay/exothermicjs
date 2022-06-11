import { Helmet } from 'react-helmet'

import { applyTemplate } from '~/components/content/Content'

export function HeadFragment({
  data,
  title,
  description,
}: {
  data?: any
  title: string
  description: string
}) {
  return (
    <Helmet>
      <title>{applyTemplate(title, data)}</title>
      <meta name='description' content={applyTemplate(description, data)} />
    </Helmet>
  )
}
