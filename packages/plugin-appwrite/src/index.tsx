import { AppwriteYamlType } from './types/yaml/appwrite'
import { AppwriteAccountButtonYamlType } from './types/yaml/appwrite-account-button'
import { AppwriteSecureYamlType } from './types/yaml/appwrite-secure'
import { DatePickerYamlType } from './types/yaml/date-picker'
import { RichTextEditorYamlType } from './types/yaml/rich-text-editor'
import { TextFieldYamlType } from './types/yaml/text-field'

export const register = {
  tags: {
    appwrite: AppwriteYamlType,
    'appwrite-secure': AppwriteSecureYamlType,
    'appwrite-account-button': AppwriteAccountButtonYamlType,
    'date-picker': DatePickerYamlType,
    'rich-text-editor': RichTextEditorYamlType,
    'text-field': TextFieldYamlType,
  },
}
