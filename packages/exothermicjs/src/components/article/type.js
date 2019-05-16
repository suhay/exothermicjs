import React from 'react'
import yaml from 'js-yaml'

import Article from './'

const ArticleYamlType = new yaml.Type(`!article`, {
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

export default ArticleYamlType
