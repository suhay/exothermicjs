import React from 'react'

export default class OffCanvas extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <h1>Endothermic Dashboard Off-Canvas!!!</h1>
        { children }
        <button>Add</button>
      </div>
    )
  }
}