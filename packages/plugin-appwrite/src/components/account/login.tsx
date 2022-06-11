import { UserContext } from '@exothermic/core'
import { useContext, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppwrite } from '~/hooks/useAppwrite'
import { SignUp } from './SignUp'

type Inputs = {
  email: string
  password: string
}

export function Login() {
  const { dispatch } = useContext(UserContext)

  const [isSigningUp, setIsSigningUp] = useState(false)
  const { register, handleSubmit } = useForm<Inputs>()
  const appwrite = useAppwrite()

  const loginWithSession = async () => {
    const loggedInUser = await appwrite.getAccount()
    if (dispatch && loggedInUser) {
      dispatch({ type: 'SET_USER', user: loggedInUser })
    }
  }

  useEffect(() => {
    loginWithSession()
  }, [])

  const login: SubmitHandler<Inputs> = async ({ email, password }) => {
    const session = await appwrite.createSession(email, password)

    if (session) {
      const loggedInUser = await appwrite.getAccount()
      if (dispatch && loggedInUser) {
        dispatch({ type: 'SET_USER', user: loggedInUser })
      }
    }
  }

  return isSigningUp ? (
    <SignUp setIsSigningUp={setIsSigningUp} />
  ) : (
    <section>
      <h3>Login</h3>
      <button type='button' onClick={() => setIsSigningUp(true)}>
        New here? Sign up!
      </button>
      <form onSubmit={handleSubmit(login)}>
        <input type='email' {...register('email', { required: true })} />
        <input type='password' {...register('password', { required: true })} />
        <input type='submit' />
      </form>
    </section>
  )
}
