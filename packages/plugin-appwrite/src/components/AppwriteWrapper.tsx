import { Loading, PluginContext, useConfig, UserContext } from '@exothermic/core'
import { Appwrite } from 'appwrite'
import { useContext, useEffect, useMemo, useState } from 'react'

import { AppwrieApiWrapper } from '~/types'
import { Account } from './account/Account'
import { Database } from './database/Database'

export function AppwriteWrapper(props: AppwrieApiWrapper) {
  const config = useConfig()
  const plugin = useMemo(
    () => config.plugins?.find((plug) => plug.resolve === '@exothermic/plugin-appwrite'),
    [config],
  )
  const { dispatch, state: pluginState } = useContext(PluginContext)
  const { dispatch: dispatchUser } = useContext(UserContext)
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
  }, [])

  if (!ready) {
    return <Loading />
  }

  const { api, action } = props

  switch (api) {
    case 'account':
      const { redirect } = props
      return <Account action={action} redirect={redirect} />
    case 'database':
      const { editable, collection, items, randomize, control, setValue } = props
      return (
        <Database
          collection={collection}
          action={action}
          items={items}
          editable={editable}
          randomize={randomize}
          control={control}
          setValue={setValue}
        />
      )
    default:
      return null
  }
}
