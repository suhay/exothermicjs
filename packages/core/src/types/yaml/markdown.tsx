import yaml from 'js-yaml'

import { Markdown } from '~/components/content/Markdown'

export const MarkdownYamlType = new yaml.Type('!markdown', {
  kind: 'scalar',
  resolve(path: string) {
    return path !== null
  },
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  construct(path: string = '/') {
    return <Markdown path={path} key={path} />
  },
  instanceOf: Markdown,
})
