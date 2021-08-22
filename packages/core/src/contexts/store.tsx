import {
  createContext, Dispatch, ReactNode, useReducer,
} from 'react'
import yaml from 'js-yaml'

import { Config, Template } from '../types'

export type Action =
  | { type: 'SET_CONFIG'; config: Config }
  | { type: 'SET_BASE'; baseTemplate: Template }
  | { type: 'SET_PAGE'; pageTemplate: Template }
  | { type: 'SET_SCHEMA'; schema: yaml.Schema }
  | { type: 'APPEND_CACHE'; key: string; value: string }
  | { type: 'REGISTER_TAG'; key: string; value: yaml.Type }
  | { type: 'SET_PLUGINS_LOADED' }

export type Store = {
  config?: Config
  baseTemplate: Template
  pageTemplate: Template
  schema?: yaml.Schema
  cache: Record<string, string>
  pluginTags: object
  pluginRoutes: object
  pluginRegistryLoaded: boolean
}

export type State = {
  store: Store
  dispatch?: Dispatch<Action>
}

const initialState: State = {
  store: {
    cache: {},
    pluginTags: {},
    pluginRoutes: {},
    pluginRegistryLoaded: false,
    baseTemplate: {
      scripts: [],
      page: [],
    },
    pageTemplate: {
      scripts: [],
      page: [],
    },
  },
}

type Props = {
  children: ReactNode
}

type Reducer = (prevState: State, action: Action) => State

const state = createContext(initialState)
const { Provider } = state

const StateProvider = ({ children }: Props) => {
  const [reducerState, dispatch] = useReducer<Reducer>((prevState, action) => {
    const newState = { ...prevState }
    switch (action.type) {
      case 'SET_CONFIG':
        newState.store.config = action.config
        break

      case 'SET_BASE':
        const dedupeScripts: object = {};

        (action.baseTemplate.headScripts ?? []).forEach((headScript) => {
          if (typeof headScript === 'string') dedupeScripts[headScript] = true
          else if (headScript.src) dedupeScripts[headScript.src] = true
        });

        (prevState.store.config?.plugins ?? []).forEach((plugin) => {
          dedupeScripts[plugin.url] = true
        });

        newState.store.baseTemplate = action.baseTemplate
        newState.store.baseTemplate.headScripts = Object.keys(dedupeScripts)
        break

      case 'SET_PAGE':
        newState.store.pageTemplate = action.pageTemplate
        break

      case 'SET_SCHEMA':
        newState.store.schema = action.schema
        break

      case 'APPEND_CACHE':
        newState.store.cache[action.key] = action.value
        break

      case 'REGISTER_TAG':
        newState.store.pluginTags[action.key] = action.value
        newState.store.schema = prevState.store.schema?.extend(action.value)
        break

      case 'SET_PLUGINS_LOADED':
        newState.store.pluginRegistryLoaded = true
        break

      default:
        break
    }

    return newState
  }, initialState)

  return <Provider value={{ ...reducerState, dispatch }}>{children}</Provider>
}

export { state, StateProvider }
