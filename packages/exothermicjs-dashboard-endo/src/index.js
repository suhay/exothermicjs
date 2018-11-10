import React from 'react'
import ReactServer from 'react-dom/server'

import Dashboard from './dashboard'
import OffCanvas from './off-canvas'

export function dashboard(site) {
  return ReactServer.renderToString(
    <Dashboard {...site} />
  )
}

export function offCanvas(page) {
  return ReactServer.renderToString(
    <OffCanvas>
      {page}
    </OffCanvas>
  )
}