import { createContext, Dispatch, ReactNode, useReducer } from 'react'

type Action =
  | { type: 'SET_USER'; user: Record<string, any> | null }
  | { type: 'SET_AUTH'; isAuthenticated: () => Promise<boolean> }

type Context = {
  isAuthenticated: () => Promise<boolean>
  data: Record<string, any> | null
}

export type UserState = {
  user: Context
  dispatch?: Dispatch<Action>
}

const initialState: UserState = {
  user: {
    isAuthenticated: async () => Promise.resolve(false),
    data: null,
  },
}

type Props = {
  children: ReactNode
}

type Reducer = (prevState: UserState, action: Action) => UserState

const state = createContext(initialState)
const { Provider } = state

function UserProvider({ children }: Props) {
  const [reducerState, dispatch] = useReducer<Reducer>((prevState, action) => {
    const newState = { ...prevState }
    switch (action.type) {
      case 'SET_USER':
        newState.user.data = action.user
        break

      case 'SET_AUTH':
        newState.user.isAuthenticated = action.isAuthenticated
        break

      default:
        break
    }

    return newState
  }, initialState)

  return <Provider value={{ ...reducerState, dispatch }}>{children}</Provider>
}

export { state as UserContext, UserProvider }
