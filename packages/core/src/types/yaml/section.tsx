import yaml from 'js-yaml'

import { guid } from '~/utils/guid'
import { PageFragmentType } from '..'
import { PageFragment } from '~/components/utils/PageFragment'

export const SectionYamlType = new yaml.Type('!section', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <PageFragment as='section' {...data} key={id ?? guid()} />
  },
  instanceOf: PageFragment,
})
