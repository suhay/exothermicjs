import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { useConfig } from '../../hooks'

export type LinkProps = {
  to: string
  role?: string
  children?: ReactNode
}

export function Link({ to, children, role }: LinkProps) {
  const config = useConfig()

  const navLink =
    to.startsWith('#') || to.startsWith('#', 1) ? (
      <HashLink smooth to={to} role={role}>
        {children}
      </HashLink>
    ) : (
      <NavLink to={`${config?.basePath ?? ''}${to}`} role={role}>
        {children}
      </NavLink>
    )

  return navLink
}
