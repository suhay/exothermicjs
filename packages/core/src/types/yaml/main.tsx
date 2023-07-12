import yaml from 'js-yaml'

import { PageFragment } from '~/components/utils/PageFragment'
import { PageFragmentType } from '~/components/utils/PageFragment.types'
import { guid } from '~/utils/guid'

export const MainYamlType = new yaml.Type('!main', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <PageFragment as='main' {...data} key={id ?? guid()} />
  },
})
