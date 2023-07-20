import { guid } from '@exothermic/core'
import yaml from 'js-yaml'

import { AccountButton } from '~/components/account/AccountButton'
import { AppwriteWrapper } from '~/components/AppwriteWrapper'
import { AppwriteApiAccount } from '..'

export const AppwriteAccountButtonYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'appwrite-account-button'}`, {
    kind: 'mapping',
    resolve(data: AppwriteApiAccount) {
      return !!data
    },
    construct(data: AppwriteApiAccount) {
      return (
        <AppwriteWrapper key={guid()}>
          <AccountButton logout={data.logout} />
        </AppwriteWrapper>
      )
    },
    instanceOf: AppwriteWrapper,
  })
