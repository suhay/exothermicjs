import { guid } from '@exothermic/core'
import yaml from 'js-yaml'

import { AppwriteWrapper } from '~/components/AppwriteWrapper'
import { AppwriteApiAccount, AppwriteApiType } from '..'

export const AppwriteAccountButtonYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'appwrite-account-button'}`, {
    kind: 'mapping',
    resolve(data: AppwriteApiAccount) {
      return !!data
    },
    construct(data: AppwriteApiAccount) {
      return (
        <AppwriteWrapper
          key={guid()}
          api={AppwriteApiType.ACCOUNT}
          action='button'
          logout={data.logout}
          login={data.login}
        />
      )
    },
    instanceOf: AppwriteWrapper,
  })
