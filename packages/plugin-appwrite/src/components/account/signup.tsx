import { UserContext } from '@exothermic/core'
import { Dispatch, SetStateAction, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppwrite } from '~/hooks/useAppwrite'

type Inputs = {
  name: string
  email: string
  password: string
}

export function SignUp({ setIsSigningUp }: { setIsSigningUp: Dispatch<SetStateAction<boolean>> }) {
  const { dispatch } = useContext(UserContext)
  const { register, handleSubmit } = useForm<Inputs>()
  const appwrite = useAppwrite()

  const signup: SubmitHandler<Inputs> = async ({ email, password, name }) => {
    const newUser = await appwrite.createAccount('unique()', email, password, name)
    if (newUser) {
      const session = await appwrite.createSession(email, password)
      if (dispatch && session) {
        dispatch({ type: 'SET_USER', user: newUser })
      }
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
