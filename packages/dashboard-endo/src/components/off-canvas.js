import React, { Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import Upload from '@exothermic/plugin-upload'

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
  const addedPlugins = { MainYamlType, SectionYamlType, FooterYamlType }
  return addedPlugins.schema({ addedPlugins })
}
