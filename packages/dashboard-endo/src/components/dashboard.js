import React from 'react'
import { Upload } from '@exothermic/plugin-upload'

export default class Dashboard extends React.PureComponent {
  render() {
    const { pages, users } = this.props
    return (
      <div>
        <h1>Endothermic Dashboard!!!...</h1>
        <a href="/">Return to Site</a>
        <ul>
          <li>{`Pages in site: ${pages}`}</li>
          <li>{`Active users: ${users}`}</li>
        </ul>
        <div className="uploads">
          <Upload />
        </div>
      </div>
    )
  }
}
