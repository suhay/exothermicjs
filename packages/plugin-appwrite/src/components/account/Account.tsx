import { useContext } from 'react'

import { UserContext } from '@exothermic/core'

import { AppwriteApiAccount } from '../../types'
import { AccountButton } from './AccountButton'
import { Login } from './Login'

export function Account({ action, logout, login }: Omit<AppwriteApiAccount, 'api'>) {
  const { user } = useContext(UserContext)

  switch (action) {
    case 'login':
      if (user.data) {
        return null
      }
      return <Login />
    case 'button':
      return <AccountButton logout={logout} login={login} />
    default:
      return null
  }
}
