import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'

export class Section extends PureComponent {
  render() {
    const {
      data: {
        id,
        title,
      },
      data,
      children,
      ...rest
    } = this.props
    const classes = data.class || ``
    return (
      <section className={classes} id={id} {...rest}>
        {title && <ReactMarkdown source={title} renderers={{ root: React.Fragment }} />}
        {data.content}
        {data.items}
        {children}
      </section>
    )
  }
}

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
