import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { PluginContext, UserContext } from '@exothermic/core'

export function Logout({ redirect }: { redirect?: string }) {
  const { state: pluginState } = useContext(PluginContext)
  const { dispatch: dispatchUser } = useContext(UserContext)
  // const navigate = useNavigate()

  const { appwrite } = pluginState.plugins

  const logout = async () => {
    await appwrite.account.deleteSession('current')
    if (dispatchUser) {
      dispatchUser({ type: 'SET_USER', user: null })
    }
    // navigate(redirect)
  }

  return (
    <button type='button' onClick={logout}>
      Logout
    </button>
  )
}
