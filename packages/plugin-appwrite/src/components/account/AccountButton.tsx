import { UserContext } from '@exothermic/core'
import { Button } from '@mui/material'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Logout } from './Logout'

export function AccountButton({ logout, login }: { logout?: string; login?: string }) {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  if (user.data) {
    return <Logout redirect={logout} />
  }
  return <Button onClick={() => navigate(login ?? '/dashboard')}>Login</Button>
}
