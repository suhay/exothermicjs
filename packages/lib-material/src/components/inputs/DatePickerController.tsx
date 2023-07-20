import { Control, Controller, FieldValues } from 'react-hook-form'
import { Props, DatePicker } from './DatePicker'

export function DatePickerController({
  name,
  control,
  ...rest
}: Props & { control: Control<FieldValues, any> }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <DatePicker {...rest} name={name} value={value} onChange={onChange} />
      )}
    />
  )
}
