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
  as?: string
  template?: string
}

export interface HeadFragmentType {
  description?: string
  headScripts?: Array<string | Record<string, string>>
  links?: Array<string | Record<string, string>>
  meta?: MetaFragment[]
  title?: string
}

export interface Template extends PageFragmentType, HeadFragmentType {
  page?: ReactNode[]
  $main?: ReactNode[]
  scripts?: string[]
  $top?: ReactElement
  $bottom?: ReactElement
  secure?: ReactNode[]
  children?: ReactNode[]
  data?: Record<string, string>
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

export interface DBPlugin {
  action: 'create' | 'list' | 'update' | 'delete' | 'get'
  collection: string
  options?: Record<string, string | boolean | number>
  items?: ReactElement[]
}

export type LocalStore = {
  get: <T>(key: string) => Promise<T> | undefined
  add: (val: unknown, key?: string) => Promise<string | null> | undefined
  del: (key: string) => Promise<void> | undefined
  put: (val: unknown, key?: string) => Promise<string | null> | undefined
  getAll: (query: Record<string, string>) => Promise<any[] | null>
}
