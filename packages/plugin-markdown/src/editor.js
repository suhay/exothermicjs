import React, { Component, Fragment } from "react"
import SimpleMDEReact from "react-simplemde-editor"
import ReactMarkdown from 'react-markdown'
// import "simplemde/dist/simplemde.min.css"

import { pageState } from '@exothermic/core/src/state'

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      id: props.id,
      prevValue: ``,
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentDidMount() {
    const { id } = this.props
    const smde = global.localStorage.getItem(`smde_${id}`)
    const ls = smde ? smde.trim() : ``
    if (ls && ls !== ``) {
      this.setState({
        value: ls,
      })
    }
  }

  handleChange(value) {
    this.setState({ value })
  }

  handleEdit() {
    const { id, value } = this.state
    this.setState({ prevValue: value })
    pageState.setState({ editingThis: id })
  }

  handleSave() {
    const { id, value } = this.state
    global.localStorage.setItem(`smde_${id}`, value)
    pageState.setState({ editingThis: `` })
  }

  handleCancel() {
    const { prevValue, id } = this.state
    this.setState({ value: prevValue })
    global.localStorage.setItem(`smde_${id}`, prevValue)
    pageState.setState({ editingThis: `` })
  }

  render() {
    const {
      options, delay, id, editingThis, ...rest
    } = this.props
    const { value } = this.state
    return (
      <Fragment>
        {editingThis
          && (
          <div>
            <SimpleMDEReact
              {...rest}
              id={id}
              value={value}
              onChange={this.handleChange}
              options={{
                autosave: {
                  enabled: true,
                  uniqueId: id,
                  delay,
                },
                ...options,
              }}
            />
            <button type="button" onClick={this.handleCancel}>cancel</button>
            <button type="button" onClick={this.handleSave}>save</button>
          </div>
          )}
        {!editingThis
          && (
          <div>
            <ReactMarkdown source={value} escapeHtml={false} renderers={{ root: Fragment }} />
            <button type="button" onClick={this.handleEdit}>edit</button>
          </div>
          )
        }
      </Fragment>
    )
  }
}
