import { useCallback } from 'react'

import { useState } from '@exothermic/core'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

import { useAppwrite } from '~/hooks/useAppwrite'

export function Logout({ redirect }: { redirect?: string }) {
  const setState = useState((exoState) => exoState.setState)

  const navigate = useNavigate()
  const appwrite = useAppwrite()

  const logout = useCallback(async () => {
    await appwrite.deleteSession('current')
    setState('user', null)
    navigate(redirect ?? '/')
  }, [appwrite, setState, navigate, redirect])

  return <Button onClick={() => logout()}>Logout</Button>
}
