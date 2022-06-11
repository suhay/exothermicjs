import { NavItemProps, NavItem } from './NavItem'

type NavbarProps = {
  items: NavItemProps[]
  classProps?: string
  listClass?: string
  id: string
  toggler: boolean
}

export function Navbar({ items, classProps, listClass, id, toggler }: NavbarProps) {
  return (
    <nav aria-label='main nav' className={classProps}>
      <div className='container-fluid'>
        {toggler && (
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#${id}`}
            aria-controls={id}
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
        )}
        <div className='navbar-collapse collapse' id={id}>
          <ul role='menubar' className={listClass}>
            {items.map((item) => (
              <NavItem to={item.to} label={item.label} key={item.to} size={items.length} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export { Link } from './Link'
