import React, { PureComponent } from 'react'

import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'

export class Article extends PureComponent {
  render() {
    const {
      data: {
        id,
        title,
        content,
        items,
      },
      data,
    } = this.props
    const classes = data.class ? data.class : ``
    return (
      <article className={classes} id={id}>
        <ReactMarkdown source={title} renderers={{ root: React.Fragment }} />
        {content}
        {items}
      </article>
    )
  }
}

export const ArticleYamlType = new yaml.Type(`!article`, {
  kind: `mapping`,
  resolve(data) {
    return data !== null && data.id !== null && data.title !== null
  },
  construct(data = {}) {
    return <Article data={data} key={data.id} />
  },
  instanceOf: Article,
  represent(data) {
    const rtn = { tag: `!article`, ...data }
    return rtn
  },
})
