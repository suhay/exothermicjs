import { Control, Controller, FieldValues } from 'react-hook-form'

import { Props, TextField } from './TextField'

export default function TextFieldController({
  name,
  control,
  ...rest
}: Props & { name: string; control: Control<FieldValues, any> }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field: { name: nam, onBlur, onChange, value } }) => (
        <TextField name={nam} onBlur={onBlur} onChange={onChange} value={value} {...rest} />
      )}
    />
  )
}
