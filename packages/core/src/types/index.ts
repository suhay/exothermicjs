import { ReactNode } from 'react'

type Plugin = {
  resolve: string
  url: string
  loaded: boolean
  options: any
}

export type MetaFragment = {
  name?: string
  content?: string
  attrs?: Record<string, string>
}

export interface PageFragmentType {
  class?: string
  id?: string
  items?: ReactNode[]
  content?: string | ReactNode
  tags?: string[]
  slug?: string
  title?: string
  as?: any
}

export interface HeadFragment {
  description?: string
  headScripts?: string[]
  links?: string[]
  meta?: MetaFragment[]
  title?: string
}

export interface Template extends PageFragmentType, HeadFragment {
  page: ReactNode[]
  scripts: string[]
  templates?: string[]
}

export type Config = {
  pagePath: string
  basePath?: string
  plugins?: Plugin[]
}
