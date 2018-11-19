import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'

export class Main extends PureComponent {
  render() {
    const { data, children } = this.props
    return (
      <main className={data.class ? data.class : ``}>
        {children}
        {data.content && <ReactMarkdown source={data.content} escapeHtml={false} renderers={{root:React.Fragment}} />}
        {data.items}
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
    return <Main data={data} key={data.id} />;
  },
  instanceOf: Main
})