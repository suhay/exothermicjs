import { guid } from '@exothermic/core'

import { AppwriteWrapper } from '~/components/AppwriteWrapper'
import { AppwrieApiWrapper } from '..'

export const AppwriteYamlType = (yaml: any, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'appwrite'}`, {
    kind: 'mapping',
    resolve(data) {
      return !!data
    },
    construct(data: AppwrieApiWrapper) {
      return <AppwriteWrapper key={guid()} {...data} />
    },
    instanceOf: AppwriteWrapper,
  })
