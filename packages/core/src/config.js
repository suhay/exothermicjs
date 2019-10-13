import fs from 'fs'
import path from 'path'

import { isBrowser } from './components/util'

const configBuilder = (options = {}) => {
  const { stringify } = options
  const def = {
    plugins: [
      `@exothermic/plugin-markdown`,
    ],
  }

  let config = {}

  if (isBrowser && window.exothermic) {
    config = window.exothermic.config
  } else if (fs && typeof fs.readFileSync !== `undefined`) {
    const base = require('@exothermic/core/exothermic.config')
    const user = fs.existsSync(path.resolve(`exothermic.config.json`)) 
      ? JSON.parse(fs.readFileSync(path.resolve(`exothermic.config.json`), `utf8`)) 
      : {}
    config = {
      ...base,
      ...user,
    }
  } else {
    config = def
  }

  return stringify ? JSON.stringify(config) : config
}

export default configBuilder
