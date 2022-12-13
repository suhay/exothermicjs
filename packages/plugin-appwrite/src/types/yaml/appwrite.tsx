import { guid } from '@exothermic/core'
import yaml from 'js-yaml'

import { AppwriteWrapper } from '~/components/AppwriteWrapper'
import { AppwriteApiWrapper } from '..'

export const AppwriteYamlType = (_yaml: any, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'appwrite'}`, {
    kind: 'mapping',
    resolve(data: AppwriteApiWrapper) {
      return !!data
    },
    construct(data: AppwriteApiWrapper) {
      return <AppwriteWrapper key={guid()} {...data} />
    },
    instanceOf: AppwriteWrapper,
  })
