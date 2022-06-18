import './wdyr'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-expect-error Cannot find module 'expose-loader?exposes=react-router-dom!react-router-dom' or its corresponding type declarations.
import { BrowserRouter } from 'expose-loader?exposes=react-router-dom!react-router-dom'
// import { BrowserRouter } from 'react-router-dom'

import { Base } from './components/Base'
import { PluginProvider } from './contexts/plugin'
// import { StateProvider } from './contexts/store'
import { UserProvider } from './contexts/user'

const container = document.getElementById('__exothermic')

const root = createRoot(container!)
root.render(
  <StrictMode>
    {/* <StateProvider> */}
    <UserProvider>
      <PluginProvider>
        <BrowserRouter>
          <Base />
        </BrowserRouter>
      </PluginProvider>
    </UserProvider>
    {/* </StateProvider> */}
  </StrictMode>,
)

export { Content } from './components/content/Content'
export { Markdown } from './components/content/Markdown'
export { Link } from './components/navbar/Link'
export { Foreach } from './components/utils/Foreach'
export { Get } from './components/utils/Get'
export { Loading } from './components/utils/Loading'
export { PluginContext, PluginProvider } from './contexts/plugin'
// export { StateContext, StateProvider } from './contexts/store'
export { UserContext, UserProvider } from './contexts/user'
export { useConfig } from './hooks/useConfig'
export { useExothermic } from './hooks/useExothermic'
export { useLoader } from './hooks/useLoader'
export { usePlugins } from './hooks/usePlugins'
export * from './types'
export { guid } from './utils/guid'
