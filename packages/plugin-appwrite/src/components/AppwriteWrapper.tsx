import { useContext, useEffect, useState } from 'react'

import { Loading, UserContext } from '@exothermic/core'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwriteApiWrapper } from '../types'
import { Account } from './account/Account'
import { Database } from './database/Database'

export function AppwriteWrapper(props: AppwriteApiWrapper) {
  const appwrite = useAppwrite()
  const { dispatch: dispatchUser } = useContext(UserContext)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (appwrite && !ready) {
      if (dispatchUser) {
        dispatchUser({
          type: 'SET_AUTH',
          isAuthenticated: async () => {
            const user = await appwrite.getAccount()
            if (user) {
              dispatchUser({ type: 'SET_USER', user })
              return true
            }
            return false
          },
        })
      }
      setReady(true)
    }
  }, [appwrite, dispatchUser, ready])

  if (!ready) {
    return <Loading />
  }

  const { api, action } = props

  switch (api) {
    case 'account':
      const { logout, login } = props
      return <Account action={action} logout={logout} login={login} />
    case 'database':
      const { collection, items, control, setValue, options } = props
      return (
        <Database
          collection={collection}
          action={action}
          items={items}
          options={options}
          control={control}
          setValue={setValue}
        />
      )
    default:
      return null
  }
}
