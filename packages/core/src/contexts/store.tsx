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

export type Store = {
  config?: Config
  baseTemplate?: Template
  pageTemplate?: Template
  schema?: yaml.Schema
  cache: Record<string, string>
  pluginTags: object
  pluginRoutes: object
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
    switch (action.type) {
      case 'SET_CONFIG':
        return {
          ...prevState,
          store: {
            ...prevState.store,
            config: action.config,
          },
        }
      case 'SET_BASE':
        const pluginUrls = (prevState.store.config?.plugins ?? []).map((plugin) => plugin.url)
        const headScripts = (action.baseTemplate.headScripts ?? []).concat(pluginUrls)

        return {
          ...prevState,
          store: {
            ...prevState.store,
            baseTemplate: {
              ...action.baseTemplate,
              headScripts,
            },
          },
        }
      case 'SET_PAGE':
        return {
          ...prevState,
          store: {
            ...prevState.store,
            pageTemplate: action.pageTemplate,
          },
        }
      case 'SET_SCHEMA':
        return {
          ...prevState,
          store: {
            ...prevState.store,
            schema: action.schema,
          },
        }
      case 'APPEND_CACHE':
        return {
          ...prevState,
          store: {
            ...prevState.store,
            cache: {
              ...prevState.store.cache,
              [action.key]: action.value,
            },
          },
        }
      case 'REGISTER_TAG':
        return {
          ...prevState,
          store: {
            ...prevState.store,
            pluginTags: {
              ...prevState.store.pluginTags,
              [action.key]: action.value,
            },
            schema: prevState.store.schema?.extend(action.value),
          },
        }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ ...reducerState, dispatch }}>{children}</Provider>
};

export { state, StateProvider }
