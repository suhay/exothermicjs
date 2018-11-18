import React from 'react'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Endothermic Dashboard!!!</h1>
        <ul>
          <li>Pages in site: {this.props.pages}</li>
          <li>Active users: {this.props.users}</li>
        </ul>
      </div>
    )
  }
}