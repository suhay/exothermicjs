import React, { Component, Fragment } from "react"
import SimpleMDEReact from "react-simplemde-editor"
import ReactMarkdown from 'react-markdown'

import { pageState } from 'exothermicjs/src/state'

export default class Editor extends Component {
  constructor(props) {
		super(props)
    this.state = {
      delay: 1000,
      value: props.value,
      id: props.id
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentDidMount() {
    const ls = localStorage.getItem(`smde_${this.props.id}`).trim()
    if (ls && ls !== '') {
      this.setState({
        value: ls
      })
    }
  }
  
  handleChange(value) {
    this.setState({ value })
  }
  
  handleEdit() {
    pageState.setState({ editingThis: this.state.id })
  }
  
  handleCancel() {
    pageState.setState({ editingThis: `` })
  }
  
  render() {
    const { options, delay, id, editingThis, ...rest } = this.props
    const { value } = this.state
    return (
      <Fragment>
        {editingThis && 
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
                  delay
                },
                ...options
              }}
            />
            <button onClick={this.handleCancel}>cancel</button>
            <button>save</button>
          </div>}
        {!editingThis && 
          <div>
            <ReactMarkdown source={value} escapeHtml={false} renderers={{root:Fragment}} />
            <button onClick={this.handleEdit}>edit</button>
          </div>
        }
      </Fragment>
    )
  }
}