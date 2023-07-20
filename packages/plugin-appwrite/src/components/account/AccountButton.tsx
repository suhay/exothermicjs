import { useState } from 'react'

import { useState as useExoState } from '@exothermic/core'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { useNavigate } from 'react-router-dom'

import { Logout } from './Logout'
import { Login } from './Login'

export function AccountButton({ logout, login }: { logout?: string; login?: string }) {
  const state = useExoState((exoState) => exoState.state)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  if (state.user) {
    return <Logout redirect={logout} />
  }

  if (login != null) {
    return <Button onClick={() => navigate(login)}>Login</Button>
  }

  return (
    <>
      <Button onClick={handleClickOpen}>Login</Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        <Login />
      </Dialog>
    </>
  )
}
