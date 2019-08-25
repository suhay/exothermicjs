import React from 'react'
import { Container, Draggable } from '@exothermic/lib-dnd'
import {
  Main,
  Section,
  Footer,
} from '@exothermic/core/src/components/layout'

export const MainYamlType = yaml => new yaml.Type(`!main`, {
  kind: `mapping`,
  resolve(data) {
    return data !== null
  },
  construct(data = {}) {
    const classes = {
      class: data.class,
    }
    return (
      <Main data={classes} key={data.id || `main`} data-state="endo">
        <Container items={data.items} id={data.id || `main`} />
      </Main>
    )
  },
  instanceOf: Main,
  represent(data) {
    const rtn = { tag: `!main`, ...data }
    return rtn
  },
})

export const FooterYamlType = yaml => new yaml.Type(`!footer`, {
  kind: `mapping`,
  resolve(data) {
    return data !== null
  },
  construct(data = {}) {
    return (
      <Footer key={data.id || `footer`} data={data} data-state="endo" />
    )
  },
  instanceOf: Footer,
  represent(data) {
    const rtn = { tag: `!footer`, ...data }
    return rtn
  },
})

export const SectionYamlType = yaml => new yaml.Type(`!section`, {
  kind: `mapping`,
  resolve(data) {
    return data !== null && data.items !== null && data.id !== null && data.title !== null
  },
  construct(data = {}) {
    return (
      <Draggable key={data.id}>
        <Section data={data} data-state="endo" />
      </Draggable>
    )
  },
  instanceOf: Section,
  represent(data) {
    const rtn = { tag: `!section`, ...data }
    return rtn
  },
})
