import fs from 'fs'
import { getGlobal } from 'reactn'

/**
 * From the given route, locate the template, or page, and replace any content keys
 * @param {string} route The page or template route to find
 * @param {{}} options A collection of options to apply
 * @param {[string]} views An array of additional root paths to search for the template or page
 * @returns {string} Template string, or a blank string if not found
 */
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
        .map((item) => Object.keys(item)
          .reduce((html, key) => item[key] !== Object(item[key]) 
            ? html.replace(`{{${key}}}`, item[key]) 
            : html, 
          template))
    }
    return Object.keys(options)
      .reduce((html, key) => options[key] !== Object(options[key]) 
        ? html.replace(`{{${key}}}`, options[key]) 
        : html,
      template)
  }

  return ``
}

export default hydrate
