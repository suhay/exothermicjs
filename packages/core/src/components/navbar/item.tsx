import { Link } from './link'

export type NavItemProps = {
  to: string;
  label: string;
  size: number;
  id?: string;
}

export const NavItem = ({
  to, label, size, id,
}: NavItemProps) => (
  <li role="none">
    <Link to={to} aria-setsize={size} aria-posinset={id + 1} role="menuitem">{label}</Link>
  </li>
)
