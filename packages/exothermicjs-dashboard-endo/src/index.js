import React from 'react'
import ReactServer from 'react-dom/server'

import Dashboard from './dashboard'
import CanvasBoard from './off-canvas'

export function dashboard(site) {
  return ReactServer.renderToString(
    <Dashboard {...site} />
  )
}

export default class OffCanvas extends React.Component {
  render(){
    return (
      <CanvasBoard>
        {this.props.children}
      </CanvasBoard>
    )
  }
}