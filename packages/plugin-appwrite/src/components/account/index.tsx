import { useContext } from 'react'
import { UserContext } from '@exothermic/core'

import { Logout } from './logout'
import { Login } from './login'

export function Account({ action, redirect }: { action: string; redirect?: string }) {
  const { user: userState } = useContext(UserContext)

  switch (action) {
    case 'login':
      if (userState.data) {
        return <Logout redirect={redirect} />
      }
      return <Login />
    default:
      return null
  }
}
