import yaml from 'js-yaml'

import { PageFragment as Article } from '../../components/utils/fragment'
import { guid } from '../../components/utils'
import { PageFragmentType } from '..'

export const ArticleYamlType = new yaml.Type('!article', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    return <Article as='article' {...data} key={guid()} />
  },
  instanceOf: Article,
})
