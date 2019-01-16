import React, { Component } from "react";
import SimpleMDEReact from "react-simplemde-editor";

export default class Editor extends Component {
  constructor(props) {
		super(props)
    this.state = {
      delay: 1000,
      value: props.value
    }
  }

  componentDidMount() {
    const ls = localStorage.getItem(`smde_${this.props.id}`).trim()
    if (ls && ls !== '') {
      this.setState({
        value: ls
      })
    }
  }
  
  handleValue(value) {
    this.setState({ value })
  }
  
  render() {
    const { options, delay, id, ...rest } = this.props
    return (
      <SimpleMDEReact
        {...rest}
        id={id}
        value={this.state.value}
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
    );
  }
}