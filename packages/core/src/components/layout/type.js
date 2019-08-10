import React from 'react'
import yaml from 'js-yaml'

import Col from './col'
import Section from './section'

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
