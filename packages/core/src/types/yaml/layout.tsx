import yaml from 'js-yaml'

import { Col } from '../../components/layout/col'
import { Section } from '../../components/layout/section'
import { Footer } from '../../components/layout/footer'
import { Main } from '../../components/layout/main'
import { Header } from '../../components/layout/header'
import { guid } from '../../components/util'
import { PageFragment } from '..'

export const ColYamlType = new yaml.Type('!col', {
  kind: 'mapping',
  resolve(data: PageFragment) {
    return !!data
  },
  construct(data: PageFragment) {
    return <Col {...data} key={guid()} />
  },
  instanceOf: Col,
})

export const SectionYamlType = new yaml.Type('!section', {
  kind: 'mapping',
  resolve(data: PageFragment) {
    return !!data
  },
  construct(data: PageFragment) {
    return <Section {...data} key={guid()} />
  },
  instanceOf: Section,
})

export const FooterYamlType = new yaml.Type('!footer', {
  kind: 'mapping',
  resolve(data: PageFragment) {
    return !!data
  },
  construct(data: PageFragment) {
    return <Footer {...data} key={guid()} />
  },
  instanceOf: Footer,
})

export const MainYamlType = new yaml.Type('!main', {
  kind: 'mapping',
  resolve(data: PageFragment) {
    return !!data
  },
  construct(data: PageFragment) {
    return <Main {...data} key={guid()} />
  },
  instanceOf: Main,
})

export const HeaderYamlType = new yaml.Type('!header', {
  kind: 'mapping',
  resolve(data: PageFragment) {
    return !!data
  },
  construct(data: PageFragment) {
    return <Header {...data} key={guid()} />
  },
  instanceOf: Header,
})
