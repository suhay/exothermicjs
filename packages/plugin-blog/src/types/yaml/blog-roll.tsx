import { guid } from '@exothermic/core'

import { BlogRoll } from '../../components/BlogRoll'

export const BlogRollYamlType = (yaml: any) =>
  new yaml.Type('!blog-roll', {
    kind: 'mapping',
    resolve(data) {
      return !!data
    },
    construct(data) {
      return <BlogRoll key={guid()} {...data} />
    },
    instanceOf: BlogRoll,
  })
