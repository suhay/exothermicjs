import { Link } from './Link'

export type NavItemProps = {
  to: string
  label: string
  size?: number
  id?: string
}

export function NavItem({ to, label, size, id }: NavItemProps) {
  return (
    <li role='none'>
      <Link to={to} aria-setsize={size} aria-posinset={parseInt(id ?? '0', 10) + 1} role='menuitem'>
        {label}
      </Link>
    </li>
  )
}
