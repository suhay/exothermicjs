import { Control, Controller, FieldValues } from 'react-hook-form'
import { Props, Checkbox } from './Checkbox'

export function CheckboxController({
  control,
  name,
  label,
  ...rest
}: {
  control: Control<FieldValues, any>
  name: string
  label: string
} & Props) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={false}
      render={({ field: { value, onChange, ...field } }) => (
        <Checkbox {...rest} checked={value} onChange={onChange} label={label} {...field} />
      )}
    />
  )
}
