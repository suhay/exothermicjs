import { useContext, useEffect, useState } from 'react'
import { PluginContext, Loading, useConfig, UserContext } from '@exothermic/core'
import { Appwrite } from 'appwrite'

import { AppwriteApiType } from '../types'
import { Account } from './account'

export function AppwriteWrapper({
  api,
  action,
  redirect,
}: {
  api: AppwriteApiType
  action: string
  redirect?: string
}) {
  const config = useConfig()
  const plugin = config.plugins?.find((plug) => plug.resolve === '@exothermic/plugin-appwrite')
  const { dispatch, state: pluginState } = useContext(PluginContext)
  const { dispatch: dispatchUser, user: userState } = useContext(UserContext)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!pluginState.plugins.appwrite) {
      const appwrite = new Appwrite()
      const { project, endpoint } = plugin?.options ?? {}
      appwrite.setEndpoint(endpoint).setProject(project)

      if (dispatch) {
        dispatch({ type: 'ADD_PLUGIN', plugin: { appwrite } })
      }

      if (dispatchUser) {
        dispatchUser({
          type: 'SET_AUTH',
          isAuthenticated: async () => {
            const user = await appwrite.account.get()
            if (user) {
              dispatchUser({ type: 'SET_USER', user })
              return true
            }
            return false
          },
        })
      }
    }

    setReady(true)
  })

  if (!ready) {
    return <Loading />
  }

  switch (api) {
    case 'account':
      return <Account action={action} redirect={redirect} />
    case 'database':
    default:
      return null
  }
}
