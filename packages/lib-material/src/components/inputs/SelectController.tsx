import { Control, Controller, FieldValues } from 'react-hook-form'
import { Props, Select } from './Select'

export function SelectController({
  name,
  control,
  options,
  ...rest
}: Props & { name: string; control: Control<FieldValues, any> }) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=''
      render={({ field }) => <Select options={options} {...field} {...rest} />}
    />
  )
}
