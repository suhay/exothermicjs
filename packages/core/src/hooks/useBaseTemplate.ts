import create from 'zustand'

import { Config, Template } from '../types'

type BaseTemplateHook = {
  baseTemplate: Template
  setBaseTemplate: (template: Template, config: Config) => void
}

export const useBaseTemplate = create<BaseTemplateHook>((set) => ({
  baseTemplate: {
    scripts: [],
    page: [],
  },
  setBaseTemplate: (template: Template, config: Config) => {
    const dedupeScripts: Map<string, boolean> = new Map()

    template.headScripts?.forEach((headScript) => {
      if (typeof headScript === 'string') {
        dedupeScripts.set(headScript, true)
      } else if (headScript.src) {
        dedupeScripts.set(headScript.src, true)
      }
    })

    config.plugins?.forEach((plugin) => {
      dedupeScripts.set(plugin.url, true)
    })

    const baseTemplate = { ...template }
    baseTemplate.headScripts = Array.from(dedupeScripts.keys())

    set({ baseTemplate })
  },
}))
