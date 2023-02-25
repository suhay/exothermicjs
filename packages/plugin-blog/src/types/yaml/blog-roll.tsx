import { guid } from '@exothermic/core'
import yaml from 'js-yaml'

import { BlogRoll, Props } from '../../components/BlogRoll'

export const BlogRollYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'blog-roll'}`, {
    kind: 'mapping',
    resolve(data) {
      return !!data
    },
    construct(data: Props) {
      return <BlogRoll key={guid()} {...data} />
    },
    instanceOf: BlogRoll,
  })
