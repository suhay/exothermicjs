import React, { Component, Fragment } from "react"
import SimpleMDEReact from "react-simplemde-editor"
import ReactMarkdown from 'react-markdown'
// import { setGlobal, useGlobal } from 'reactn'
// import "simplemde/dist/simplemde.min.css"

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
    const { value } = this.state
    this.setState({ prevValue: value })
  }

  handleSave() {
    const { id, value } = this.state
    global.localStorage.setItem(`smde_${id}`, value)
  }

  handleCancel() {
    const { prevValue, id } = this.state
    this.setState({ value: prevValue })
    global.localStorage.setItem(`smde_${id}`, prevValue)
  }

  render() {
    const {
      options, delay, id, editingThis, ...rest
    } = this.props
    const { value } = this.state
    return (
      <>
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
          )}
      </>
    )
  }
}
