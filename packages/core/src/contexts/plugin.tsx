import { createContext, Dispatch, ReactNode, useReducer } from 'react'

import { PluginContextType } from '../types'

type Action = { type: 'ADD_PLUGIN'; plugin: Record<string, any> }

export type PluginState = {
  state: PluginContextType
  dispatch?: Dispatch<Action>
}

const initialState: PluginState = {
  state: {
    plugins: {},
  },
}

type Props = {
  children: ReactNode
}

type Reducer = (prevState: PluginState, action: Action) => PluginState

const state = createContext(initialState)
const { Provider } = state

function PluginProvider({ children }: Props) {
  const [reducerState, dispatch] = useReducer<Reducer>((prevState, action) => {
    const newState = { ...prevState }
    switch (action.type) {
      case 'ADD_PLUGIN':
        const [key, val] = Object.entries(action.plugin)[0]
        newState.state.plugins[key] = val
        break

      default:
        break
    }

    return newState
  }, initialState)

  return <Provider value={{ ...reducerState, dispatch }}>{children}</Provider>
}

export { state as PluginContext, PluginProvider }
