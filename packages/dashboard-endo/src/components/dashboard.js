import React from 'react'
import { Upload } from '@exothermic/plugin-upload'

const Dashboard = ({ pages, users }) => (
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

export default Dashboard
