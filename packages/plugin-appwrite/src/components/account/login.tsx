import { useContext, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { UserContext, PluginContext } from '@exothermic/core'

import { SignUp } from './signup'

type Inputs = {
  email: string
  password: string
}

export function Login() {
  const { state: pluginState } = useContext(PluginContext)
  const { appwrite } = pluginState.plugins
  const { dispatch } = useContext(UserContext)

  const [isSigningUp, setIsSigningUp] = useState(false)
  const { register, handleSubmit } = useForm<Inputs>()

  const login: SubmitHandler<Inputs> = ({ email, password }) => {
    appwrite.account
      .createSession(email, password)
      .then(() => appwrite.account.get())
      .then((loggedInUser) => {
        if (dispatch) {
          dispatch({ type: 'SET_USER', user: loggedInUser })
        }
      })
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
