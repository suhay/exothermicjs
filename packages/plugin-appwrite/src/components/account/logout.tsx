import { UserContext } from '@exothermic/core'
import { Button } from '@mui/material'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'

export function Logout({ redirect }: { redirect?: string }) {
  const { dispatch: dispatchUser } = useContext(UserContext)
  const navigate = useNavigate()
  const appwrite = useAppwrite()

  const logout = async () => {
    await appwrite.deleteSession('current')
    if (dispatchUser) {
      dispatchUser({ type: 'SET_USER', user: null })
    }
    navigate(redirect ?? '/')
  }

  return <Button onClick={logout}>Logout</Button>
}
