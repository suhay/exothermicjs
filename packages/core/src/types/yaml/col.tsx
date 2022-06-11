import yaml from 'js-yaml'

import { guid } from '~/utils/guid'
import { PageFragmentType } from '..'
import { PageFragment } from '~/components/utils/PageFragment'

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
