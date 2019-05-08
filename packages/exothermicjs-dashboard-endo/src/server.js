import React from 'react'
import ReactServer from 'react-dom/server'

import Dashboard from './components/dashboard'

export default function dashboard(site) {
  return ReactServer.renderToString(
    <Dashboard {...site} />
  )
}
