import { useCallback, useEffect } from 'react'

import TextField, { TextFieldProps } from '@mui/material/TextField'
import MuiAutocomplete from '@mui/material/Autocomplete'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

export type Props = TextFieldProps & {
  options: object[]
  label: string
  name: string
  class?: string
  setValue?: UseFormSetValue<FieldValues>
  value: object
  onChange: (event: React.SyntheticEvent<Element, Event>, data: object | null) => void
}

export function Autocomplete({
  options,
  label,
  name = 'autocomplete',
  onChange,
  value,
  setValue,
  class: classes,
  ...rest
}: Props) {
  useEffect(() => {
    if (value && setValue) {
      setValue(name, value)
    }
  }, [])

  const handleChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, data: object | null) => {
      if (setValue) {
        setValue(name, data)
      }
      onChange(event, data)
    },
    [name, onChange, setValue],
  )

  return (
    <MuiAutocomplete
      disablePortal
      id={name}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} {...rest} label={label} />}
      onChange={(event, data) => handleChange(event, data)}
      className={classes}
    />
  )
}
