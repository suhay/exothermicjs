import { guid } from '@exothermic/core'
import yaml from 'js-yaml'

import { BlogArticle, Props } from '~/components/BlogArticle'

export const BlogArticleYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'blog-article'}`, {
    kind: 'mapping',
    resolve(data) {
      return !!data
    },
    construct(data: Props) {
      return <BlogArticle key={guid()} {...data} />
    },
    instanceOf: BlogArticle,
  })
