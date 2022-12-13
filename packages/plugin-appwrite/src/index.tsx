import { AppwriteYamlType } from './types/yaml/appwrite'
import { AppwriteAccountButtonYamlType } from './types/yaml/appwrite-account-button'
import { AppwriteSecureYamlType } from './types/yaml/appwrite-secure'
import { DatePickerYamlType } from './types/yaml/date-picker'
import { TextFieldYamlType } from './types/yaml/text-field'

export const register = {
  tags: {
    appwrite: AppwriteYamlType,
    'appwrite-secure': AppwriteSecureYamlType,
    'appwrite-account-button': AppwriteAccountButtonYamlType,
    'date-picker': DatePickerYamlType,
    'text-field': TextFieldYamlType,
  },
}
