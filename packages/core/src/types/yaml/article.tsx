import yaml from 'js-yaml'

import { PageFragment as Article } from '~/components/utils/PageFragment'
import { PageFragmentType } from '~/components/utils/PageFragment.types'
import { guid } from '~/utils/guid'

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
