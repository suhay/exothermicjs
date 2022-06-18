import { TextField } from '~/components/fields/TextField'

export const TextFieldYamlType = (yaml: any, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'text-field'}`, {
    kind: 'mapping',
    resolve(data: any) {
      return !!data
    },
    construct(data: any) {
      return <TextField key={data.name} {...data} />
    },
    instanceOf: TextField,
  })
