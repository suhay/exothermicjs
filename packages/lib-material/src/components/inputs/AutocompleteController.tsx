import { Control, Controller, FieldValues } from 'react-hook-form'
import { Props, Autocomplete } from './Autocomplete'

export function AutocompleteController({
  control,
  name,
  options,
  label,
  ...rest
}: {
  name: string
  control: Control<FieldValues, any>
  options: object[]
  label: string
} & Props) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={options[0]}
      render={({ field: { ref, onChange, ...field } }) => (
        <Autocomplete
          {...rest}
          options={options}
          label={label}
          onChange={(data: any) => onChange(data)}
          inputRef={ref}
          {...field}
        />
      )}
    />
  )
}
