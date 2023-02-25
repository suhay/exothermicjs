import yaml from 'js-yaml'

import { Props, TextField } from '~/components/inputs/TextField'

export const TextFieldYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'text-field'}`, {
    kind: 'mapping',
    resolve(data: Props) {
      return !!data
    },
    construct(data: Props) {
      return <TextField key={data.name} {...data} />
    },
    instanceOf: TextField,
  })
