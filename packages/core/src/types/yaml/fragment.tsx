import yaml from 'js-yaml'

import { PageFragment } from '~/components/utils/PageFragment'
import { guid } from '~/utils/guid'
import { PageFragmentType } from '..'

export const FragmentYamlType = new yaml.Type('!fragment', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <PageFragment as='div' {...data} key={id ?? guid()} />
  },
  instanceOf: PageFragment,
})
