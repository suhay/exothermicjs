import fs from 'fs'
import { getGlobal } from 'reactn'

const hydrate = (route, options = {}, views = []) => {
  let template = null

  if (views.length) {
    const { pagesPath } = getGlobal()

    if (fs.existsSync(`${pagesPath}/${route}`)) {
      template = fs.readFileSync(`${pagesPath}/${route}`, `utf8`)
    } else {
      const provided = views.find((view) => fs.existsSync(`${view}/${route}`))
      if (provided) {
        template = fs.readFileSync(`${provided}/${route}`, `utf8`)
      }
    }
  } else {
    template = fs.readFileSync(route, `utf8`)
  }

  if (template) {
    if (options.items && options.items.length) {
      return options.items
        .map((item) => Object.keys(item).reduce((html, key) => item[key] !== Object(item[key]) ? html.replace(`{{${key}}}`, item[key]) : html, template))
    } 
    return Object.keys(options).reduce((html, key) => options[key] !== Object(options[key]) ? html.replace(`{{${key}}}`, options[key]) : html, template)
  }

  return ``
}

export default hydrate
