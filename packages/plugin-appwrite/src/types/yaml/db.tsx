import { guid, DBPlugin } from '@exothermic/core'
import yaml from 'js-yaml'

import { AppwriteWrapper } from '~/components/AppwriteWrapper'
import { AppwriteApiType } from '..'

export const DBYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'db'}`, {
    kind: 'mapping',
    resolve(data: DBPlugin) {
      return !!data
    },
    construct(data: DBPlugin) {
      return <AppwriteWrapper key={guid()} api={AppwriteApiType.DATABASE} {...data} />
    },
    instanceOf: AppwriteWrapper,
  })
