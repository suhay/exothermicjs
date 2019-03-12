import { State } from "statable"

const pageState = new State({
	page: ``,
	route: ``,
	pagesPath: ``,
  editing: false,
  editingThis: ``,
})

export default pageState