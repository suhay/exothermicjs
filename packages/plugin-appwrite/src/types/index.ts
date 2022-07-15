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
  allowNew?: boolean
}

export type AppwrieApiAccount = {
  action: 'login' | 'button'
  api: AppwriteApiType.ACCOUNT
  logout?: string
  login?: string
}

export type AppwrieApiWrapper = AppwrieApiDatabase | AppwrieApiAccount

export type CustomElementType =
  | 'paragraph'
  | 'block-quote'
  | 'bulleted-list'
  | 'heading-one'
  | 'heading-two'
  | 'list-item'
  | 'numbered-list'

type CustomText =
  | {
      bold?: boolean
      code?: boolean
      italic?: boolean
      text: string
      underline?: boolean
    }
  | null
  | string

export type TextAlign = 'left' | 'center' | 'right' | 'justify'

export type CustomElement = { type: CustomElementType; children: CustomText[]; align?: TextAlign }

export type CustomFormat = 'bold' | 'italic' | 'underline' | 'code'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
