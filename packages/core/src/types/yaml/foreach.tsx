import yaml from 'js-yaml'

import { guid } from '~/utils/guid'
import { Foreach } from '~/components/utils/Foreach'

export const ForeachYamlType = new yaml.Type('!foreach', {
  kind: 'mapping',
  resolve(data) {
    return !!data
  },
  construct(data) {
    return <Foreach key={guid()} {...data} />
  },
  instanceOf: Foreach,
})
