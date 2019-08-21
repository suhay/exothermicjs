import React from 'react'
import fetch from 'isomorphic-fetch'
// import Upload from '@exothermic/plugin-upload'

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
      <>
        <h1>Endothermic Dashboard Off-Canvas!!!</h1>
        {children}
        <button type="button">Add</button>
        <button type="button" onClick={this.handleSave}>Save</button>
        <div className="uploads">
          {/* <Upload /> */}
        </div>
      </>
    )
  }
}
