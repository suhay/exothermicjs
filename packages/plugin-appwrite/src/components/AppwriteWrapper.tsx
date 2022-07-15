import { Loading, UserContext } from '@exothermic/core'
import { useContext, useEffect, useState } from 'react'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwrieApiWrapper } from '../types'
import { Account } from './account/Account'
import { Database } from './database/Database'

export function AppwriteWrapper(props: AppwrieApiWrapper) {
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
      const { editable, collection, items, randomize, control, setValue, allowNew } = props
      return (
        <Database
          collection={collection}
          action={action}
          items={items}
          editable={editable}
          randomize={randomize}
          control={control}
          setValue={setValue}
          allowNew={allowNew}
        />
      )
    default:
      return null
  }
}
