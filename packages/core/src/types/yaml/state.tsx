import yaml from 'js-yaml'

import { State } from '~/components/utils/State'
import { Props } from '~/components/utils/State.types'
import { guid } from '~/utils/guid'

export const StateYamlType = new yaml.Type('!state', {
  kind: 'mapping',
  resolve(data: Props) {
    return !!data
  },
  construct(data: Props) {
    return <State {...data} key={guid()} />
  },
  instanceOf: State,
})
