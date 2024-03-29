import yaml from 'js-yaml'

import { DatePicker, Props } from '~/components/inputs/DatePicker'

export const DatePickerYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'date-picker'}`, {
    kind: 'mapping',
    resolve(data: Props) {
      return !!data
    },
    construct(data: Props) {
      return <DatePicker key={data.name} {...data} />
    },
    instanceOf: DatePicker,
  })
