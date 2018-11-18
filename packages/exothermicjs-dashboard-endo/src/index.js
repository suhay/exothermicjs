import React from 'react'
import ReactServer from 'react-dom/server'

import Dashboard from './components/dashboard'
import CanvasBoard from './components/off-canvas'

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

export { DashboardSchema } from './components/off-canvas'