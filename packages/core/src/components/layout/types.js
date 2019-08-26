import React from 'react'
import yaml from 'js-yaml'

import Col from './col'
import Section from './section'
import Footer from './footer'
import Main from './main'
import Header from './header'

export const ColYamlType = new yaml.Type(`!col`, {
  kind: `mapping`,
  resolve(data) {
    return data !== null && data.id !== null
  },
  construct(data = {}) {
    return <Col data={data} key={data.id} />
  },
  instanceOf: Col,
  represent(data) {
    const rtn = { tag: `!col`, ...data }
    return rtn
  },
})

export const SectionYamlType = new yaml.Type(`!section`, {
  kind: `mapping`,
  resolve(data) {
    return data !== null && data.items !== null && data.id !== null && data.title !== null
  },
  construct(data = {}) {
    return <Section data={data} key={data.id} />
  },
  instanceOf: Section,
  represent(data) {
    const rtn = { tag: `!section`, ...data }
    return rtn
  },
})

export const FooterYamlType = new yaml.Type(`!footer`, {
  kind: `mapping`,
  resolve(data) {
    return data !== null
  },
  construct(data = {}) {
    return <Footer data={data} key="footer" />
  },
  instanceOf: Footer,
  represent(data) {
    const rtn = { tag: `!footer`, ...data }
    return rtn
  },
})

export const MainYamlType = new yaml.Type(`!main`, {
  kind: `mapping`,
  resolve(data) {
    return data !== null
  },
  construct(data = {}) {
    return <Main data={data} key={data.id || `main`} />
  },
  instanceOf: Main,
  represent(data) {
    const rtn = { tag: `!main`, ...data }
    return rtn
  },
})

export const HeaderYamlType = new yaml.Type(`!header`, {
  kind: `mapping`,
  resolve(data) {
    return data !== null
  },
  construct(data = {}) {
    return <Header data={data} key="header" />
  },
  instanceOf: Header,
  represent(data) {
    const rtn = { tag: `!header`, ...data }
    return rtn
  },
})

export const LAYOUT_SCHEMA = yaml.Schema.create([
  SectionYamlType,
  ColYamlType,
  FooterYamlType,
  HeaderYamlType,
  MainYamlType,
])
