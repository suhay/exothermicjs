import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'

export class Main extends PureComponent {
  render() {
    const { data, children } = this.props
    return (
      <main className={data.class ? data.class : ``}>
        {data.title && <ReactMarkdown source={data.title} renderers={{root:React.Fragment}} />}
        {data.content}
        {data.items}
        {children}
      </main>
    )
  }
}

export const MainYamlType = new yaml.Type('!main', {
  kind: 'mapping',
  resolve: function (data) {
    return data !== null
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Main data={data} key={data.id || 'main'} />;
  },
  instanceOf: Main,
  represent: function (data) {
    const rtn = { _tag: '!main', ...data }
    return rtn
  }
})