import { ReactNode } from 'react'

import { guid } from '@exothermic/core'
import yaml from 'js-yaml'

import { Profile } from '~/components/account/Profile'
import { AppwriteWrapper } from '~/components/AppwriteWrapper'

export const AppwriteProfileYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'appwrite-profile'}`, {
    kind: 'mapping',
    construct({
      fields,
      items,
    }: {
      fields?: Record<string, Record<string, string | number | boolean>>
      items?: ReactNode[]
    }) {
      return (
        <AppwriteWrapper key={guid()}>
          <Profile fields={fields} items={items} />
        </AppwriteWrapper>
      )
    },
    instanceOf: AppwriteWrapper,
  })
