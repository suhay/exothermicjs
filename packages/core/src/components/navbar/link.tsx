import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

type LinkProps = {
  to: string;
  role?: string;
  children?: ReactNode;
}

export const Link = ({ to, children, role }: LinkProps) => {
  const navLink = to.startsWith('#') || to.startsWith('#', 1)
    ? (
      <NavHashLink smooth activeClassName="selected" to={to} role={role}>{children}</NavHashLink>
    ) : (
      <NavLink exact activeClassName="selected" to={to} role={role}>{children}</NavLink>
    )

  return (
    <>
      {navLink}
    </>
  )
}
