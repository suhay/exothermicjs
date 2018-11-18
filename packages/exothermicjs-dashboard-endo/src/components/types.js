import React, { PureComponent } from 'react'
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
    return (
      <Main key={data.id || "main"} data={data} />
    )
  },
  instanceOf: Main
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
  instanceOf: Footer
});


export const SectionYamlType = new yaml.Type('!section', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null && data.items !== null && data.id !== null && data.title !== null ;
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return (
      <Section key={data.id} data={data} />
    )
  },
  instanceOf: Section
});