import { NavItemProps, NavItem } from './item'

type NavbarProps = {
  items: NavItemProps[];
}

export const Navbar = ({ items }: NavbarProps) => (
  <nav aria-label="main nav">
    <ul role="menubar">
      {items.map((item, i) => (
        <NavItem
          to={item.to}
          label={item.label}
          key={i.toString()}
          id={item.id}
          size={items.length}
        />
      ))}
    </ul>
  </nav>
)
