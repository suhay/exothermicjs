import yaml from 'js-yaml'

import { Get } from '~/components/utils/Get'

export const GetYamlType = new yaml.Type('!get', {
  kind: 'scalar',
  resolve(path: string) {
    return path !== null
  },
  construct(path: string = '/') {
    return <Get path={path} key={path} />
  },
  instanceOf: Get,
})
