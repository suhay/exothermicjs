import { useCallback, lazy } from 'react'

import { useState } from '@exothermic/core'
import Button from '@mui/material/Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { useAppwrite } from '~/hooks/useAppwrite'

const TextFieldController = lazy(
  () => import('@exothermic/lib-material/src/components/inputs/TextFieldController'),
)

type Inputs = FieldValues & {
  email: string
  password: string
}

export function EmailPasswordForm({
  setBadUser,
}: {
  setBadUser: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { handleSubmit, control, formState } = useForm<FieldValues>()
  const appwrite = useAppwrite()
  const setState = useState((exoState) => exoState.setState)

  const login: SubmitHandler<FieldValues> = useCallback(
    async (values) => {
      const { email, password } = values as Inputs
      setBadUser(false)
      const session = await appwrite.createSession(email, password)?.catch(() => {
        setBadUser(true)
      })

      if (session) {
        const loggedInUser = await appwrite.getAccount()?.catch(() => {
          setBadUser(true)
        })
        setState('user', loggedInUser)
      }
    },
    [appwrite, setState, setBadUser],
  )

  return (
    <form>
      <TextFieldController name='email' type='email' control={control} required label='Email' />
      <TextFieldController
        name='password'
        type='password'
        control={control}
        required
        label='Password'
      />
      <Button onClick={handleSubmit(login)} variant='contained' disabled={formState.isSubmitting}>
        Login
      </Button>
    </form>
  )
}
