import { useCallback, useContext } from 'react'

import { UserContext } from '@exothermic/core'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'

export function Logout({ redirect }: { redirect?: string }) {
  const { dispatch: dispatchUser } = useContext(UserContext)

  const navigate = useNavigate()
  const appwrite = useAppwrite()

  const logout = useCallback(async () => {
    await appwrite.deleteSession('current')
    if (dispatchUser) {
      dispatchUser({ type: 'SET_USER', user: null })
    }
    navigate(redirect ?? '/')
  }, [appwrite, dispatchUser, navigate, redirect])

  return <Button onClick={() => logout()}>Logout</Button>
}
