import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'

export class Header extends PureComponent {
  render() {
    const { data, children } = this.props
    return (
      <header className={data.class ? data.class : ``}>
        {data.title && <ReactMarkdown source={data.title} renderers={{ root: React.Fragment }} />}
        {data.content}
        {data.items}
        {children}
      </header>
    )
  }
}

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
