import yaml from 'js-yaml'

import { Markdown } from '../../components/utils/markdown'

export const MarkdownYamlType = new yaml.Type('!markdown', {
  kind: 'scalar',
  resolve(path: string) {
    return path !== null
  },
  construct(path = '/') {
    return (
      <Markdown path={path} key={path} />
    )
  },
  instanceOf: Markdown,
})
