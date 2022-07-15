import { Loading, UserContext } from '@exothermic/core'
import { Button, TextField } from '@mui/material'
import { useContext, useEffect, useState, useCallback } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useAppwrite } from '~/hooks/useAppwrite'
import { SignUp } from './SignUp'

type Inputs = {
  email: string
  password: string
}

export function Login() {
  const { dispatch } = useContext(UserContext)

  const [isSigningUp, setIsSigningUp] = useState(false)
  const [badUser, setBadUser] = useState(false)
  const [loadingForm, setLoadingForm] = useState(true)
  const { handleSubmit, control, formState } = useForm<Inputs>()
  const appwrite = useAppwrite()

  const loginWithSession = useCallback(async () => {
    const loggedInUser = await appwrite.getAccount()?.catch(() => null)
    if (dispatch && loggedInUser) {
      dispatch({ type: 'SET_USER', user: loggedInUser })
    }
    setLoadingForm(false)
  }, [appwrite, dispatch])

  useEffect(() => {
    loginWithSession().catch(() => null)
  }, [])

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
    [appwrite, dispatch],
  )

  if (isSigningUp) {
    return <SignUp setIsSigningUp={setIsSigningUp} />
  }

  const content = loadingForm ? (
    <Loading />
  ) : (
    <>
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
            <TextField
              label='Password'
              onChange={onChange}
              value={value}
              required
              type='password'
            />
          )}
        />
        <Button onClick={handleSubmit(login)} variant='contained' disabled={formState.isSubmitting}>
          Login
        </Button>
      </form>
      <span>
        Don&apos;t have an account?&nbsp;
        <Button onClick={() => setIsSigningUp(true)} variant='text'>
          Sign up!
        </Button>
      </span>
    </>
  )

  return (
    <div className='login-form'>
      <h1>Login</h1>
      {badUser && <span className='error'>Invalid Username or Password</span>}
      {content}
    </div>
  )
}
