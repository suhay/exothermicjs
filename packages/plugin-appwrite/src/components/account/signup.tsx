import { Dispatch, SetStateAction, useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { UserContext, PluginContext } from '@exothermic/core'

type Inputs = {
  name: string
  email: string
  password: string
}

export function SignUp({ setIsSigningUp }: { setIsSigningUp: Dispatch<SetStateAction<boolean>> }) {
  const { state: pluginState } = useContext(PluginContext)
  const { appwrite } = pluginState.plugins
  const { dispatch } = useContext(UserContext)

  const { register, handleSubmit } = useForm<Inputs>()

  const signup: SubmitHandler<Inputs> = async ({ email, password, name }) => {
    const newUser = await appwrite.account.create('unique()', email, password, name)
    await appwrite.account.createSession(email, password)
    if (dispatch) {
      dispatch({ type: 'SET_USER', user: newUser })
    }
  }

  return (
    <section>
      <h3>Sign up</h3>
      <button type='button' onClick={() => setIsSigningUp(false)}>
        Already have an account?
      </button>
      <form onSubmit={handleSubmit(signup)}>
        <input type='text' {...register('name', { required: true })} />
        <input type='email' {...register('email', { required: true })} />
        <input type='password' {...register('password', { required: true })} />
        <input type='submit' />
      </form>
    </section>
  )
}
