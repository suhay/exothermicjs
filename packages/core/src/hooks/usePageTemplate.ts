import create from 'zustand'

import { Template } from '../types'

type PageTemplateHook = {
  pageTemplate: Template
  setPageTemplate: (template: Template) => void
  setTitle: (title: string) => void
  setDescription: (description: string) => void
}

export const usePageTemplate = create<PageTemplateHook>((set, get) => ({
  pageTemplate: {
    scripts: [],
    page: [],
  },
  setPageTemplate: (template: Template) => set({ pageTemplate: template }),
  setTitle: (title: string) => {
    const { pageTemplate } = get()
    pageTemplate.title = title
    set({ pageTemplate })
  },
  setDescription: (description: string) => {
    const { pageTemplate } = get()
    pageTemplate.description = description
    set({ pageTemplate })
  },
}))
