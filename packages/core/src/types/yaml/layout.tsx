import yaml from 'js-yaml'

import { guid } from '../../components/utils'
import { PageFragmentType } from '..'
import { PageFragment } from '../../components/utils/fragment'

export const FooterYamlType = new yaml.Type('!footer', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <PageFragment as="footer" {...data} key={id ?? guid()} />
  },
})

export const MainYamlType = new yaml.Type('!main', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <PageFragment as="main" {...data} key={id ?? guid()} />
  },
})

export const HeaderYamlType = new yaml.Type('!header', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <PageFragment as="header" class="container" {...data} key={id ?? guid()} />
  },
})

export const FragmentYamlType = new yaml.Type('!fragment', {
  kind: 'mapping',
  resolve(data: PageFragmentType) {
    return !!data
  },
  construct(data: PageFragmentType) {
    const { id } = data
    return <PageFragment as="div" {...data} key={id ?? guid()} />
  },
})
