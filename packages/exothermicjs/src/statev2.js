import { setGlobal } from 'reactn'

export default () => {
  setGlobal({
    config: null,
    schema: null,
    draggables: {},
    page: ``,
    route: ``,
    path: ``,
    editing: false,
    editingThis: ``,
    cache: {},
    cacheId: ``,
  })
}
