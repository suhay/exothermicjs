import { ReactElement } from 'react'
import { Control, FieldValues, UseFormSetValue } from 'react-hook-form'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

export enum AppwriteApiType {
  ACCOUNT = 'account',
  AVATARS = 'avatars',
  DATABASE = 'database',
  FUNCTIONS = 'functions',
  HEALTH = 'health',
  LOCALIZATION = 'localization',
  STORAGE = 'storage',
  TEAMS = 'teams',
  USER = 'user',
}

export type AppwrieApiDatabase = {
  api: AppwriteApiType.DATABASE
  action: 'list' | 'get' | 'update' | 'create'
  collection: string
  control?: Control<FieldValues, any>
  editable?: boolean
  items?: ReactElement[]
  randomize?: boolean
  setValue?: UseFormSetValue<FieldValues>
}

export type AppwrieApiAccount = {
  action: 'login'
  api: AppwriteApiType.ACCOUNT
  redirect?: string
}

export type AppwrieApiWrapper = AppwrieApiDatabase | AppwrieApiAccount

type CustomElement = { type: 'paragraph' | 'block-quote'; children: CustomText[]; align?: any }
type CustomText = {
  bold?: boolean
  code?: boolean
  italic?: boolean
  text: string
  underline?: boolean
}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
