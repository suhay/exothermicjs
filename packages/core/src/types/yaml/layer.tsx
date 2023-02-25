import yaml from 'js-yaml'

// import { guid } from '../../components/utils'
// import { PageFragmentType } from '..'
// import { PageFragment } from '../../components/utils/fragment'

export const LayerYamlType = new yaml.Type('!layer', {
  kind: 'scalar',
  resolve(data: string) {
    return !!data
  },
  construct() {
    return null
  },
})
