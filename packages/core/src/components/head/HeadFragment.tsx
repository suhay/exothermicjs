import { Helmet } from 'react-helmet'

import { applyTemplate } from '~/components/content/Content'

export function HeadFragment({
  data,
  title,
  description,
}: {
  data?: any
  title?: string
  description?: string
}) {
  if (!data) {
    return null
  }

  return (
    <Helmet>
      {title && <title>{applyTemplate(title, data)}</title>}
      {description && <meta name='description' content={applyTemplate(description, data) ?? ''} />}
    </Helmet>
  )
}
