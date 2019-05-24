import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import fetch from 'isomorphic-fetch'
import fs from 'fs'
import yaml from 'js-yaml'
import { Subscribe } from 'statable'
import shortid from 'shortid'

import { pageState } from 'exothermicjs/src/state'

import Editor from './editor'

export class Markdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: fs && typeof fs.readFileSync === `function` ? fs.readFileSync(`${pageState.state.pagesPath}markdown/${props.data}.md`, `utf8`) : null,
      loading: !(fs && typeof fs.readFileSync === `function`),
    }
  }

  componentDidMount() {
    const { data: fetchPath, cacheId } = this.props
    fetch(`/load/pages/markdown/${fetchPath}.md`)
      .then(response => response.text())
      .then((data) => {
        this.setState({
          data,
          loading: false,
        })
        const cache = { ...pageState.state.cache }
        cache[cacheId] = data
        pageState.setState({
          cache,
        })
      })
  }

  componentWillUnmount() {
    const { cacheId } = this.props
    const cache = { ...pageState.state.cache }
    delete cache[cacheId]
    pageState.setState({
      cache,
    })
  }

  render() {
    const { data, loading } = this.state
    const { cacheId } = this.props
    const id = data || cacheId
    return (
      <Subscribe to={[pageState]}>
        {({ editing, editingThis }) => (
          <Fragment>
            {!editing && <ReactMarkdown source={data} escapeHtml={false} renderers={{ root: Fragment }} />}
            {editing && !loading && <Editor id={id} value={data} editingThis={editingThis === id} />}
          </Fragment>
        )}
      </Subscribe>
    )
  }
}

export const Type = new yaml.Type(`!markdown`, {
  kind: `scalar`,
  resolve(data) {
    return data !== null
  },
  construct(data = {}) {
    const cacheId = shortid.generate()
    return <Markdown data={data} cacheId={cacheId} key={cacheId} />
  },
  instanceOf: Markdown,
  represent(props) {
    console.log(pageState.state.cache[props.cacheId])
    const rtn = {
      tag: `!markdown ${props.data}`,
    }
    return rtn
  },
})
