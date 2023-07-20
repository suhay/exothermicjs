import { useEffect, useMemo, useState, lazy, ReactNode } from 'react'

import { Loading } from '@exothermic/core'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { Models } from 'appwrite'
import { useForm } from 'react-hook-form'

import { useAppwrite } from '~/hooks/useAppwrite'
import { Logout } from './Logout'

const TextFieldController = lazy(
  () => import('@exothermic/lib-material/src/components/inputs/TextFieldController'),
)

export function Profile({
  fields,
  items,
}: {
  fields?: Record<string, Record<string, string | number | boolean>>
  items?: ReactNode[]
}) {
  const appwrite = useAppwrite()
  const [account, setAccount] = useState<Models.Account<Models.Preferences>>()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      ...account,
    },
  })

  useEffect(() => {
    appwrite
      .getAccount()
      .then((acc) => {
        setAccount(acc)
      })
      .catch(() => null)
  }, [appwrite])

  const content = useMemo(() => {
    if (account == null || control == null) {
      return null
    }

    if (items) {
      return <>{items}</>
    }

    if (fields) {
      return Object.keys(fields)
        .filter((field) => !!account[field] || !!account.prefs[field])
        .map((field) => (
          <TextFieldController
            key={field}
            name={field}
            control={control}
            defaultValue={account.prefs[field] ?? account[field]}
            {...fields[field]}
          />
        ))
    }

    return (
      <>
        <TextFieldController
          name='name'
          label='Name'
          defaultValue={account.name}
          control={control}
          fullWidth
        />
        <TextFieldController
          name='email'
          label='Email'
          control={control}
          type='email'
          defaultValue={account.email}
          required
          fullWidth
        />
        <TextFieldController
          name='password'
          label='Current Password'
          control={control}
          type='password'
          required
          fullWidth
        />
      </>
    )
  }, [account, control, fields])

  const onSubmit = async (data: any) => {
    if (account == null) {
      return
    }

    try {
      const newAccount = await appwrite.updateAccount(account, data)
      setAccount(newAccount)
    } catch {
      //
    }
  }

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  if (content == null) {
    return <Loading />
  }

  return (
    <>
      <Button onClick={handleClickOpen}>Profile</Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Your Account</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {content}
          <Button type='submit'>Submit</Button>
        </form>
        <Logout />
      </Dialog>
    </>
  )
}
