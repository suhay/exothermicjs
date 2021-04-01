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

export interface PageFragment {
  class?: string
  id?: string
  items?: ReactNode[]
  content?: string | ReactNode
  tags?: string[]
  slug?: string
  title?: string
}

export interface HeadFragment {
  description?: string
  headScripts?: string[]
  links?: string[]
  meta?: MetaFragment[]
  title?: string
}

export interface Template extends PageFragment, HeadFragment {
  page: ReactNode[]
  scripts: string[]
}

export type Config = {
  path: string
  plugins?: Plugin[]
}
