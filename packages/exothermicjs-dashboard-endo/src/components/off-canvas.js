import React, { Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import { Upload } from 'exothermicjs-plugin-upload'
import { pageState } from 'exothermicjs/src/state'

import {
  MainYamlType,
  SectionYamlType,
  FooterYamlType,
} from './types'

export default class OffCanvas extends React.Component {
  constructor(props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    pageState.setState({ editing: true })
  }

  componentWillUnmount() {
    pageState.setState({ editing: false })
  }

  handleSave() {
    const { children, dump, path } = this.props
    fetch(`/api/${path}`.replace(`//`, `/`), {
      credentials: `same-origin`,
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json; charset=utf-8`,
      },
      body: JSON.stringify({
        text: dump(children),
      }),
    })
      .then(response => response.text())
      .catch((error) => { throw error })
  }

  render() {
    const { children } = this.props
    return (
      <Fragment>
        <h1>Endothermic Dashboard Off-Canvas!!!</h1>
        {children}
        <button type="button">Add</button>
        <button type="button" onClick={this.handleSave}>Save</button>
        <div className="uploads">
          <Upload />
        </div>
      </Fragment>
    )
  }
}

export const Schema = () => {
  const exo = require(`exothermicjs`)
  const InteractiveTypes = { MainYamlType, SectionYamlType, FooterYamlType }
  return exo.Schema(InteractiveTypes)
}
