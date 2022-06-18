import create from 'zustand'

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
  .catch(() => {
    useConfig.setState({ pagePath: '/pages' })
  })
