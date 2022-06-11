import yaml from 'js-yaml'

import { HeadFragment } from '~/components/head/HeadFragment'

export const HeadYamlType = new yaml.Type('!head', {
  kind: 'mapping',
  resolve(data) {
    return !!data
  },
  construct({ title, description }) {
    return <HeadFragment title={title} description={description} />
  },
  instanceOf: HeadFragment,
})
