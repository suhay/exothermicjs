import yaml from 'js-yaml'

import { guid } from '../../components/util'
import { Get } from '../../components/util/get'
import { Markdown } from '../../components/util/markdown'

export const GetYamlType = new yaml.Type('!get', {
  kind: 'scalar',
  resolve(path) {
    return path !== null
  },
  // eslint-disable-next-line no-undef
  construct(path = '/'): JSX.Element {
    return <Get path={path} key={guid()} />
  },
  instanceOf: Get,
})

export const MarkdownYamlType = new yaml.Type('!markdown', {
  kind: 'scalar',
  resolve(path) {
    return path !== null
  },
  construct(path = '/') {
    return (
      <Markdown path={path} key={path} />
    )
  },
  instanceOf: Markdown,
})
