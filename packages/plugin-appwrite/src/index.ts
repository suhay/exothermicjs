import { AppwriteYamlType } from './types/yaml/appwrite'
import { AppwriteAccountButtonYamlType } from './types/yaml/appwrite-account-button'
import { AppwriteProfileYamlType } from './types/yaml/appwrite-profile'
import { AppwriteSecureYamlType } from './types/yaml/appwrite-secure'
import { DBYamlType } from './types/yaml/db'

export const register = {
  tags: {
    appwrite: AppwriteYamlType,
    'appwrite-secure': AppwriteSecureYamlType,
    'appwrite-account-button': AppwriteAccountButtonYamlType,
    db: DBYamlType,
    'appwrite-profile': AppwriteProfileYamlType,
  },
}
