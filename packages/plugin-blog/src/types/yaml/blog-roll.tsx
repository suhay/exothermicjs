import '@exothermic/core'
import { guid } from 'components/util/index'

import { BlogRoll } from '../../components/blog-roll'

export const BlogRollYamlType = (yaml: any) => new yaml.Type('!blog-roll', {
  kind: 'mapping',
  resolve(data) {
    return !!data
  },
  construct(data) {
    return <BlogRoll key={guid()} {...data} />
  },
  instanceOf: BlogRoll,
})
