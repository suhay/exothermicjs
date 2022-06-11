import { guid } from '@exothermic/core'

import { AppwriteApiType } from '..'
import { AppwriteWrapper } from '~/components/AppwriteWrapper'

export const AppwriteSecureYamlType = (yaml: any, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'appwrite-secure'}`, {
    kind: 'scalar',
    resolve(path: string) {
      return path !== null
    },
    construct(redirect: string = '/') {
      return (
        <AppwriteWrapper
          key={guid()}
          api={AppwriteApiType.ACCOUNT}
          action='login'
          redirect={redirect}
        />
      )
    },
    instanceOf: AppwriteWrapper,
  })
