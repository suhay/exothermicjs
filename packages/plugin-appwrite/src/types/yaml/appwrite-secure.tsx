import { guid } from '@exothermic/core'
import yaml from 'js-yaml'

import { Login } from '~/components/account/Login'
import { AppwriteWrapper } from '~/components/AppwriteWrapper'

export const AppwriteSecureYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'appwrite-secure'}`, {
    kind: 'mapping',
    construct() {
      return (
        <AppwriteWrapper key={guid()}>
          <Login />
        </AppwriteWrapper>
      )
    },
    instanceOf: AppwriteWrapper,
  })
