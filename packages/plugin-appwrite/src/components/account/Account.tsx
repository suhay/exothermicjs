import { useState } from '@exothermic/core'

import { AppwriteApiAccount } from '../../types'
import { AccountButton } from './AccountButton'
import { Login } from './Login'

export function Account({ action, logout, login }: Omit<AppwriteApiAccount, 'api'>) {
  const state = useState((exoState) => exoState.state)

  switch (action) {
    case 'login':
      if (state.user) {
        return null
      }
      return <Login />
    case 'button':
      return <AccountButton logout={logout} login={login} />
    default:
      return null
  }
}
