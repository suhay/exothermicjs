import { UserContext } from '@exothermic/core'
import { useContext } from 'react'

import { Login } from './Login'
import { Logout } from './Logout'

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
