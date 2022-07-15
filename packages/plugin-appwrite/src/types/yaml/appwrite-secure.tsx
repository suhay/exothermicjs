import { guid } from '@exothermic/core'
import yaml from 'js-yaml'

import { AppwriteWrapper } from '~/components/AppwriteWrapper'
import { AppwrieApiAccount, AppwriteApiType } from '..'

export const AppwriteSecureYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'appwrite-secure'}`, {
    kind: 'mapping',
    construct(data: AppwrieApiAccount) {
      return <AppwriteWrapper key={guid()} {...data} api={AppwriteApiType.ACCOUNT} action='login' />
    },
    instanceOf: AppwriteWrapper,
  })
