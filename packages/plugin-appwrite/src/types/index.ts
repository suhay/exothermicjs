import { ReactElement } from 'react'
import { Control, FieldValues, UseFormSetValue } from 'react-hook-form'

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

export type AppwriteApiDatabase = {
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

export type AppwriteApiAccount = {
  action: 'login' | 'button'
  api: AppwriteApiType.ACCOUNT
  logout?: string
  login?: string
}

export type AppwriteApiWrapper = AppwriteApiDatabase | AppwriteApiAccount
