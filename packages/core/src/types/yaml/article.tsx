import yaml from 'js-yaml'

import { Article } from '../../components/article'
import { guid } from '../../components/util'
import { PageFragment } from '..'

export const ArticleYamlType = new yaml.Type('!article', {
  kind: 'mapping',
  resolve(data: PageFragment) {
    return !!data
  },
  construct(data: PageFragment) {
    return <Article {...data} key={guid()} />
  },
  instanceOf: Article,
})
