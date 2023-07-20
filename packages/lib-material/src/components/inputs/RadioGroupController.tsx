import { Control, Controller, FieldValues } from 'react-hook-form'
import { Props, RadioGroup } from './RadioGroup'

export function RadioGroupController({
  control,
  name,
  ...rest
}: Props & { control: Control<FieldValues, any> }) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=''
      render={({ field }) => <RadioGroup {...rest} {...field} />}
    />
  )
}
