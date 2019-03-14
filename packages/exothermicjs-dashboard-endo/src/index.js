import React from 'react'
import ReactServer from 'react-dom/server'

import Dashboard from './components/dashboard'
import CanvasBoard from './components/off-canvas'

import './styles/endothermic.css'

export function dashboard(site) {
  return ReactServer.renderToString(
    <Dashboard {...site} />
  )
}

export class OffCanvas extends React.Component {
  render(){
    const { dump, path, children } = this.props
    
    return (
      <CanvasBoard dump={dump} path={path}>
        {children}
      </CanvasBoard>
    )
  }
}

export { Schema } from './components/off-canvas'