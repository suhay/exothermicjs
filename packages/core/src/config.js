import fs from 'fs'
import path from 'path'

import { configState } from './state'

const configBuilder = (options = {}) => {
  const { stringify } = options
  if (configState.state.config) {
    return stringify ? JSON.stringify(configState.state.config) : configState.state.config
  }

  let config = {}
  if (typeof window !== `undefined` && window.exothermic) {
    config = window.exothermic.config
  } else if (typeof fs.readFileSync !== `undefined`) {
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

  configState.setState(config)
  return stringify ? JSON.stringify(config) : config
}

export default configBuilder
