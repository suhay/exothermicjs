import { ReactElement, ReactNode } from 'react'

export type Plugin = {
  resolve: string
  url: string
  loaded: boolean
  options?: Record<string, string>
  exclude?: string[]
  nameMap?: Record<string, string>
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
  title?: string
  as?: any
}

export interface HeadFragment {
  description?: string
  headScripts?: any[]
  links?: string[]
  meta?: MetaFragment[]
  title?: string
}

export interface Template extends PageFragmentType, HeadFragment {
  page?: ReactNode[]
  $main?: ReactNode[]
  scripts?: string[]
  $top?: ReactElement
  $bottom?: ReactElement
  secure?: ReactElement
}

export type Config = {
  pagePath: string
  basePath?: string
  plugins?: Plugin[]
}

export type LoadingState = 'LOADING' | 'LOADED' | 'ERROR'

export type UserContextType = {
  isAuthenticated: () => boolean
  data: Record<string, string | number>
}

export type PluginContextType = {
  plugins: Record<string, any>
}
