import yaml from 'js-yaml'

import { guid } from '../../components/utils'
import { PageFragmentType } from '..'
import { PageFragment } from '../../components/utils/fragment'

export const MainYamlType = new yaml.Type('!main', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <PageFragment as="main" {...data} key={id ?? guid()} />
  },
})
