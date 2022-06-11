import yaml from 'js-yaml'

import { PageFragment } from '~/components/utils/PageFragment'
import { guid } from '~/utils/guid'
import { PageFragmentType } from '..'

export const HeaderYamlType = new yaml.Type('!header', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <PageFragment as='header' class='container' {...data} key={id ?? guid()} />
  },
  instanceOf: PageFragment,
})
