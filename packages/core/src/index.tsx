// import './wdyr'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-expect-error Cannot find module 'expose-loader?exposes=react-router-dom!react-router-dom' or its corresponding type declarations.
import { BrowserRouter } from 'expose-loader?exposes=react-router-dom!react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
import yaml from 'js-yaml'

import { useSchema } from '~/hooks/useSchema'
import { YamlTypes } from './types/yaml'
import { Base } from './components/Base'
import { PluginProvider } from './contexts/plugin'

const container = document.getElementById('__exothermic')
const types: yaml.Type[] = (Object.keys(YamlTypes) || []).map((key) => YamlTypes[key])
const schema = yaml.DEFAULT_SCHEMA.extend(types)
useSchema.setState({ schema })

const root = createRoot(container!)
root.render(
  <StrictMode>
    <PluginProvider>
      <BrowserRouter>
        <Base />
      </BrowserRouter>
    </PluginProvider>
  </StrictMode>,
)

export { Content } from '~/components/content/Content'
export { Markdown } from '~/components/content/Markdown'
export { Link } from '~/components/navbar/Link'
export { Foreach } from '~/components/utils/Foreach'
export { Get } from '~/components/utils/Get'
export { Loading } from '~/components/utils/Loading'
export { State } from '~/components/utils/State'
export { PluginContext, PluginProvider } from '~/contexts/plugin'
export { useConfig } from '~/hooks/useConfig'
export { useExothermic } from '~/hooks/useExothermic'
export { useLoader } from '~/hooks/useLoader'
export { usePlugins, registerPlugin } from '~/hooks/usePlugins'
export { useLocalStore } from '~/hooks/useLocalStore'
export { useState } from '~/hooks/useState'
export * from './types'
export { guid } from '~/utils/guid'
