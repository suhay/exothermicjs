import yaml from 'js-yaml'

import { guid } from '../../components/utils'
import { PageFragmentType } from '..'
import { PageFragment } from '../../components/utils/fragment'

export const FooterYamlType = new yaml.Type('!footer', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <PageFragment as="footer" {...data} key={id ?? guid()} />
  },
  instanceOf: PageFragment,
})
