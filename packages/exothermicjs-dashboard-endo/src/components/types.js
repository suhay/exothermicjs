import React from 'react'
import { Container, Draggable } from 'exothermicjs-lib-dnd'
import yaml from 'js-yaml'

import {
  Main,
  Section,
  Footer
} from 'exothermicjs/src'

export const MainYamlType = new yaml.Type('!main', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    const classes = {
      class: data.class
    }
    return (
      <Main data={classes} key={data.id || "main"}>
        <Container items={data.items} id={data.id || "main"} />
      </Main>
    )
  },
  instanceOf: Main,
  represent: function (data) {
    const rtn = { _tag: '!main', ...data }
    return rtn
  }
})

export const FooterYamlType = new yaml.Type('!footer', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return (
      <Footer key={data.id || "footer"} data={data} />
    )
  },
  instanceOf: Footer,
  represent: function (data) {
    const rtn = { _tag: '!footer', ...data }
    return rtn
  }
});

export const SectionYamlType = new yaml.Type('!section', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null && data.items !== null && data.id !== null && data.title !== null ;
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return (
      <Draggable key={data.id}>
        <Section data={data} />
      </Draggable>
    )
  },
  instanceOf: Section,
  represent: function (data) {
    const rtn = { _tag: '!section', ...data }
    return rtn
  }
});