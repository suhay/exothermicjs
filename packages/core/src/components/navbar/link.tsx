import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

import { useConfig } from '../../hooks'

export type LinkProps = {
  to: string;
  role?: string;
  children?: ReactNode;
}

export const Link = ({ to, children, role }: LinkProps) => {
  const config = useConfig()

  const navLink = to.startsWith('#') || to.startsWith('#', 1)
    ? (
      <NavHashLink smooth activeClassName="selected" to={to} role={role}>{children}</NavHashLink>
    ) : (
      <NavLink exact activeClassName="selected" to={`${config.basePath ?? ''}${to}`} role={role}>{children}</NavLink>
    )

  return (
    <>
      {navLink}
    </>
  )
}
