import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Base } from './components'
import { StateProvider } from './contexts/store'
import { PluginProvider } from './contexts/plugin'
import { UserProvider } from './contexts/user'

const container = document.getElementById('__exothermic')

const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
  <StateProvider>
    <UserProvider>
      <PluginProvider>
        <BrowserRouter>
          <Base />
        </BrowserRouter>
      </PluginProvider>
    </UserProvider>
  </StateProvider>,
)

export * from './components'
export { StateContext, StateProvider } from './contexts/store'
export { UserContext, UserProvider } from './contexts/user'
export { PluginContext, PluginProvider } from './contexts/plugin'
export * from './hooks'
export * from './types'
