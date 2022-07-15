import create from 'zustand'

import * as logger from '~/utils/logger'
import { Config, Plugin } from '../types'

export const useConfig = create<Config>((set) => ({
  pagePath: '',
  setPagePath: (path: string) => set({ pagePath: path }),
  basePath: undefined,
  setBasePath: (path: string) => set({ basePath: path }),
  plugins: undefined,
  setPlugins: (plugins: Plugin[]) => set({ plugins }),
}))

fetch('/exothermic.config.json')
  .then((resp) => resp.json())
  .then((file: Config) => {
    useConfig.setState(file)
  })
  .catch((err) => {
    logger.error(err)
    useConfig.setState({ pagePath: '/pages' })
  })
