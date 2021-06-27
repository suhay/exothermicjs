import yaml from 'js-yaml'

import { Col } from '../../components/layout/col'
import { PageFragmentType } from '..'
import { guid } from '../../components/utils'

export const ColYamlType = new yaml.Type('!col', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <Col {...data} key={id ?? guid()} />
  },
})
