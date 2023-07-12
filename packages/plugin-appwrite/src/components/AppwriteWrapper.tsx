import { useEffect, useState } from 'react'

import { Loading, useState as useExoState } from '@exothermic/core'

import { useAppwrite } from '~/hooks/useAppwrite'
import { AppwriteApiType, AppwriteApiWrapper } from '../types'
import { Account } from './account/Account'
import { Database } from './database/Database'

export function AppwriteWrapper(props: AppwriteApiWrapper) {
  const appwrite = useAppwrite()
  const setState = useExoState((exoState) => exoState.setState)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (appwrite && !ready) {
      setState('isAuthenticated', async () => {
        const user = await appwrite.getAccount()
        if (user) {
          setState('user', user)
          return true
        }
        return false
      })
      setReady(true)
    }
  }, [appwrite, ready, setState])

  if (!ready) {
    return <Loading />
  }

  if ('api' in props) {
    const { api } = props

    if (api === AppwriteApiType.ACCOUNT) {
      const { logout, login, action } = props
      return <Account action={action} logout={logout} login={login} />
    }

    if (api === AppwriteApiType.DATABASE) {
      const { collection, items, control, setValue, options, action } = props
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
    }
  }

  if ('children' in props) {
    const { children } = props
    return children
  }

  return null
}
