import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'

export class Footer extends PureComponent {
  render() {
    const { data, children } = this.props
    return (
      <footer className={data.class ? data.class : ``}>
        {data.title && <ReactMarkdown source={data.title} renderers={{ root: React.Fragment }} />}
        {data.content}
        {data.items}
        {children}
      </footer>
    )
  }
}

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
