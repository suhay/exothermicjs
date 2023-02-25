import yaml from 'js-yaml'

import { Navbar, NavbarProps } from '~/components/navbar/Navbar'
import { NavItemProps } from '~/components/navbar/NavItem'
import { guid } from '~/utils/guid'

export const NavbarYamlType = new yaml.Type('!navbar', {
  kind: 'mapping',
  construct(data: NavbarProps & { class?: string } = { id: guid() }) {
    const { id, class: classProps, listClass, toggler = false } = data
    const items = data.items?.reduce((acc: NavItemProps[], item) => {
      Object.entries(item).forEach(([label, to]) =>
        acc.push({
          label,
          to: to.toString(),
        }),
      )

      return acc
    }, [])

    return (
      <Navbar
        items={items}
        classProps={classProps}
        listClass={listClass}
        id={id}
        key={id}
        toggler={toggler}
      />
    )
  },
  instanceOf: Navbar,
})
