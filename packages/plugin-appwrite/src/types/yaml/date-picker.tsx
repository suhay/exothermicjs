import { DatePicker } from '~/components/fields/DatePicker'

export const DatePickerYamlType = (yaml: any, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'date-picker'}`, {
    kind: 'mapping',
    resolve(data: any) {
      return !!data
    },
    construct(data: any) {
      return <DatePicker key={data.name} {...data} />
    },
    instanceOf: DatePicker,
  })
