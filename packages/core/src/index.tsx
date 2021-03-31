import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Base } from './components'
import { StateProvider } from './contexts/store'

const rootNode = document.getElementById('__exothermic')

ReactDom.render(
  <StateProvider>
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  </StateProvider>,
  rootNode,
)

export * from './components'
export * from './contexts/store'
export * from './hooks'
export * from './types'
