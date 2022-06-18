import { ReactNode, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { useConfig } from '~/hooks/useConfig'

export type LinkProps = {
  to: string
  role?: string
  children?: ReactNode
}

export function Link({ to, children, role }: LinkProps) {
  const config = useConfig()

  const navLink = useMemo(
    () =>
      to.startsWith('#') || to.startsWith('#', 1) ? (
        <HashLink smooth to={to} role={role}>
          {children}
        </HashLink>
      ) : (
        <NavLink to={`${config.basePath ?? ''}${to}`} role={role}>
          {children}
        </NavLink>
      ),
    [to, role, children, config.basePath],
  )

  return navLink
}
