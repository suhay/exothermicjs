import { AppwriteYamlType } from './types/yaml/appwrite'
import { AppwriteSecureYamlType } from './types/yaml/appwrite-secure'

export const register = {
  tags: {
    appwrite: AppwriteYamlType,
    'appwrite-secure': AppwriteSecureYamlType,
  },
}
