import yaml from 'js-yaml'
import { guid } from '@exothermic/core'

import { Props, Drawer } from '~/components/navigation/Drawer'

export const DrawerYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'drawer'}`, {
    kind: 'mapping',
    resolve(data: Props) {
      return !!data
    },
    construct(data: Props) {
      return <Drawer key={guid()} {...data} />
    },
    instanceOf: Drawer,
  })
