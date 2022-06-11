import yaml from 'js-yaml'

import { Navbar } from '~/components/navbar/Navbar'
import { guid } from '~/utils/guid'

export const NavbarYamlType = new yaml.Type('!navbar', {
  kind: 'mapping',
  construct(data = {}) {
    const { id = guid(), class: classProps, listClass, toggler = false } = data
    const items = data.items.reduce((acc, item) => {
      Object.entries<string>(item).forEach(([label, to]) =>
        acc.push({
          label,
          to,
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
