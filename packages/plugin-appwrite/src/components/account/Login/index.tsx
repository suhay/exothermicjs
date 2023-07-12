import { useEffect, useState, useCallback } from 'react'

import { Loading, useState as useExoState } from '@exothermic/core'
import Button from '@mui/material/Button'

import { useAppwrite } from '~/hooks/useAppwrite'
import { SignUp } from '../SignUp'
import { EmailPasswordForm } from './EmailPasswordForm'

export function Login() {
  const setState = useExoState((exoState) => exoState.setState)

  const isUsingEmailPassword = true
  // const isUsingMagicUrl = true

  const [isSigningUp, setIsSigningUp] = useState(false)
  const [badUser, setBadUser] = useState(false)
  const [loadingForm, setLoadingForm] = useState(true)
  const appwrite = useAppwrite()

  const loginWithSession = useCallback(async () => {
    const loggedInUser = await appwrite.getAccount()?.catch(() => null)
    setState('user', loggedInUser)
    setLoadingForm(false)
  }, [appwrite, setState])

  useEffect(() => {
    loginWithSession().catch(() => null)
  }, [loginWithSession])

  if (isSigningUp) {
    return <SignUp setIsSigningUp={setIsSigningUp} />
  }

  const content = loadingForm ? (
    <Loading />
  ) : (
    <>
      {isUsingEmailPassword && <EmailPasswordForm setBadUser={setBadUser} />}
      {/* {isUsingMagicUrl && <MagicUrlForm />} */}
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
