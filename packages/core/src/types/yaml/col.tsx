import yaml from 'js-yaml'

import { PageFragment } from '~/components/utils/PageFragment'
import { PageFragmentType } from '~/components/utils/PageFragment.types'
import { guid } from '~/utils/guid'

export const ColYamlType = new yaml.Type('!col', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id, class: classProps } = data
    const classes = classProps?.includes('col') ? classProps : `col ${classProps ?? ''}`.trim()

    return <PageFragment {...data} class={classes} key={id ?? guid()} />
  },
  instanceOf: PageFragment,
})
