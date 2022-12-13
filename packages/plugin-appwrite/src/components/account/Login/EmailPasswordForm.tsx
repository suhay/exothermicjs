import { useCallback, useContext } from 'react'

import { UserContext } from '@exothermic/core'
import TextField from '@mui/material/TextField'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Button from '@mui/material/Button'

import { useAppwrite } from '~/hooks/useAppwrite'

type Inputs = {
  email: string
  password: string
}

export function EmailPasswordForm({
  setBadUser,
}: {
  setBadUser: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { handleSubmit, control, formState } = useForm<Inputs>()
  const appwrite = useAppwrite()
  const { dispatch } = useContext(UserContext)

  const login: SubmitHandler<Inputs> = useCallback(
    async ({ email, password }) => {
      setBadUser(false)
      const session = await appwrite.createSession(email, password)?.catch(() => {
        setBadUser(true)
      })

      if (session) {
        const loggedInUser = await appwrite.getAccount()?.catch(() => {
          setBadUser(true)
        })
        if (dispatch && loggedInUser) {
          dispatch({ type: 'SET_USER', user: loggedInUser })
        }
      }
    },
    [appwrite, dispatch, setBadUser],
  )

  return (
    <form>
      <Controller
        name='email'
        control={control}
        defaultValue=''
        render={({ field: { onChange, value } }) => (
          <TextField label='Email' onChange={onChange} value={value} required type='email' />
        )}
      />
      <Controller
        name='password'
        control={control}
        defaultValue=''
        render={({ field: { onChange, value } }) => (
          <TextField label='Password' onChange={onChange} value={value} required type='password' />
        )}
      />
      <Button onClick={handleSubmit(login)} variant='contained' disabled={formState.isSubmitting}>
        Login
      </Button>
    </form>
  )
}
