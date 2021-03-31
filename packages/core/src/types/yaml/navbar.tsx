import yaml from 'js-yaml'

import { Navbar } from '../../components/navbar'
import { guid } from '../../components/util'

export const NavbarYamlType = new yaml.Type('!navbar', {
  kind: 'mapping',
  construct(data = {}) {
    const items = data.items.reduce((acc, item) => {
      Object.entries<string>(item)
        .forEach(([label, to]) => acc.push({
          label,
          to,
        }))

      return acc
    }, [])

    return <Navbar items={items} key={guid()} />
  },
  instanceOf: Navbar,
})
