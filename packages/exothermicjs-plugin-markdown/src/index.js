import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import fetch from 'isomorphic-fetch'
import fs from 'fs'
import yaml from 'js-yaml'
import { Subscribe } from 'statable'
import shortid from 'shortid'
import "simplemde/dist/simplemde.min.css"

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
    const { data: fetchPath } = this.props
    fetch(`/load/pages/markdown/${fetchPath}.md`)
      .then(response => response.text())
      .then(data => this.setState({
        data,
        loading: false,
      }))
  }

  render() {
    const { data, loading } = this.state
    const id = data || shortid.generate()
    return (
      <Subscribe to={[pageState]}>
        {state => (
          <Fragment>
            {!state.editing && <ReactMarkdown source={data} escapeHtml={false} renderers={{ root: Fragment }} />}
            {state.editing && !loading && <Editor id={id} value={data} editingThis={state.editingThis === id} />}
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
    return <Markdown data={data} key="content" />
  },
  instanceOf: Markdown,
  represent(data) {
    const rtn = { tag: `!markdown`, ...data }
    return rtn
  },
})
