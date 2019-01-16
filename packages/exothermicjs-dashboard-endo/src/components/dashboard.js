import React from 'react'

import { Upload } from 'exothermicjs/src'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Endothermic Dashboard!!!...</h1>
        <a href="/">Return to Site</a>
        <ul>
          <li>Pages in site: {this.props.pages}</li>
          <li>Active users: {this.props.users}</li>
        </ul>
        <div className="uploads">
          <Upload />
        </div>
      </div>
    )
  }
}