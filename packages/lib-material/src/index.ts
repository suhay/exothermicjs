import { DatePickerYamlType } from './types/yaml/date-picker'
import { DrawerYamlType } from './types/yaml/drawer'
import { TextFieldYamlType } from './types/yaml/text-field'

export const register = {
  tags: {
    'date-picker': DatePickerYamlType,
    drawer: DrawerYamlType,
    'text-field': TextFieldYamlType,
  },
}

export { default as TextFieldController } from '~/components/inputs/TextFieldController'
