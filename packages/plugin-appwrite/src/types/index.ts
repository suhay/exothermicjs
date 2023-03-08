import { DBPlugin } from '@exothermic/core'
import { Control, FieldValues, UseFormSetValue } from 'react-hook-form'

export type AppwritePluginOptions = {
  project: string
  endpoint: string
  database: string
  collections: Record<string, string>
}

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

export type AppwriteApiDatabaseOptions = {
  editable?: boolean
  randomize?: boolean
  allowNew?: boolean
  limit?: number
}

export type AppwriteApiDatabase = DBPlugin & {
  api: AppwriteApiType.DATABASE
  collection: string
  control?: Control<FieldValues, any>
  setValue?: UseFormSetValue<FieldValues>
}

export type AppwriteApiAccount = {
  api: AppwriteApiType.ACCOUNT
  action: 'login' | 'button'
  logout?: string
  login?: string
}

export type AppwriteApiWrapper = AppwriteApiDatabase | AppwriteApiAccount
