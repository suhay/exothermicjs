import { Control, Controller, FieldValues } from 'react-hook-form'
import { Props, Slider } from './Slider'

export function SliderController({
  control,
  name,
  ...rest
}: Props & { control: Control<FieldValues, any> }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...field } }) => <Slider {...field} value={value} {...rest} />}
    />
  )
}
