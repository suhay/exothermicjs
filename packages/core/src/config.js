import fs from 'fs'
import path from 'path'

import { isBrowser } from './components/util'

const configBuilder = (options = {}) => {
  const { stringify } = options

  let config = {}
  if (isBrowser && window.exothermic) {
    config = window.exothermic.config
  } else if (fs && typeof fs.readFileSync !== `undefined`) {
    const base = JSON.parse(fs.readFileSync(path.resolve(`${__dirname}/../exothermic.config.json`), `utf8`))
    const user = fs.existsSync(`exothermic.config.json`) ? JSON.parse(fs.readFileSync(path.resolve(`exothermic.config.json`), `utf8`)) : {}
    config = {
      ...base,
      ...user,
    }
  } else {
    config = {
      plugins: [
        `@exothermic/plugin-markdown`,
      ],
    }    
  }

  return stringify ? JSON.stringify(config) : config
}

export default configBuilder
