import React, { PureComponent } from 'react'
import yaml from 'js-yaml'

export class Col extends PureComponent {
  render() {
    const { data } = this.props
    const classes = data.class
      ? data.class.startsWith(`col`)
        ? data.class
        : `col ${data.class}`
      : `col`
    return (
      <div className={classes}>
        {data.content}
        {data.items}
      </div>
    )
  }
}

export const Type = new yaml.Type(`!col`, {
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
