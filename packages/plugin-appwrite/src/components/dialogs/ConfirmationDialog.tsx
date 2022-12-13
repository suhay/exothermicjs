import { ReactNode } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

type Props = {
  open: boolean
  onClose: (value?: string) => void
  onOk: (value?: string) => void
  title: ReactNode
  content?: ReactNode
}

export function ConfirmationDialog({ open, onClose, onOk, title, content, ...other }: Props) {
  const handleCancel = () => {
    onClose()
  }

  const handleOk = () => {
    onOk()
  }

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth='xs'
      open={open}
      {...other}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
