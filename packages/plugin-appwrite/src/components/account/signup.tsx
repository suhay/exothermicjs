import { Dispatch, SetStateAction, useContext, useCallback } from 'react'

import { UserContext } from '@exothermic/core'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useAppwrite } from '~/hooks/useAppwrite'

type Inputs = {
  name: string
  email: string
  password: string
}

export function SignUp({ setIsSigningUp }: { setIsSigningUp: Dispatch<SetStateAction<boolean>> }) {
  const { dispatch } = useContext(UserContext)

  const { control, handleSubmit } = useForm<Inputs>()
  const appwrite = useAppwrite()

  const signUp: SubmitHandler<Inputs> = useCallback(
    async ({ email, password, name }) => {
      const newUser = await appwrite.createAccount(email, password, name)
      if (newUser) {
        const session = await appwrite.createSession(email, password)
        if (dispatch && session) {
          dispatch({ type: 'SET_USER', user: newUser })
        }
      }
    },
    [appwrite, dispatch],
  )

  return (
    <div className='sign-up-form'>
      <h1>Create an account</h1>
      <form>
        <Controller
          name='name'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value } }) => (
            <TextField label='Full Name' onChange={onChange} value={value} required />
          )}
        />
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
            <TextField
              label='Password'
              onChange={onChange}
              value={value}
              required
              type='password'
            />
          )}
        />
        <Button onClick={handleSubmit(signUp)} variant='contained'>
          Sign up
        </Button>
      </form>
      <span>
        Already have an account?&nbsp;
        <Button onClick={() => setIsSigningUp(false)} variant='text'>
          Sign in!
        </Button>
      </span>
    </div>
  )
}
