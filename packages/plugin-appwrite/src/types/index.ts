import { ReactElement } from 'react'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

export enum AppwriteApiType {
  ACCOUNT = 'account',
  USER = 'user',
  TEAMS = 'teams',
  DATABASE = 'database',
  STORAGE = 'storage',
  FUNCTIONS = 'functions',
  LOCALIZATION = 'localization',
  AVATARS = 'avatars',
  HEALTH = 'health',
}

export type AppwrieApiDatabase = {
  api: AppwriteApiType.DATABASE
  action: 'list' | 'get' | 'update' | 'create'
  collection: string
  items?: ReactElement[]
}

export type AppwrieApiAccount = {
  api: AppwriteApiType.ACCOUNT
  action: 'login'
  redirect?: string
}

export type AppwrieApiWrapper = AppwrieApiDatabase | AppwrieApiAccount

type CustomElement = { type: 'paragraph' | 'block-quote'; children: CustomText[]; align?: any }
type CustomText = {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean
}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
