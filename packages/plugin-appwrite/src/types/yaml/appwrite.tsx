import { guid } from '@exothermic/core'
import yaml from 'js-yaml'

import { AppwriteWrapper } from '~/components/AppwriteWrapper'
import { AppwrieApiWrapper } from '..'

export const AppwriteYamlType = (_yaml: any, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'appwrite'}`, {
    kind: 'mapping',
    resolve(data: AppwrieApiWrapper) {
      return !!data
    },
    construct(data: AppwrieApiWrapper) {
      return <AppwriteWrapper key={guid()} {...data} />
    },
    instanceOf: AppwriteWrapper,
  })
