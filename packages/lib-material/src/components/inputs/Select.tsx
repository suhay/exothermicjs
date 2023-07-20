import { useCallback, useEffect } from 'react'

import MenuItem from '@mui/material/MenuItem'
import MuiSelect, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

export type Props = {
  setValue?: UseFormSetValue<FieldValues>
  class?: string
  options: Record<string, string | number | readonly string[] | undefined>
} & SelectProps<string>

export function Select({
  options,
  class: classes,
  value,
  setValue,
  name = 'select-field',
  onChange,
  ...rest
}: Props) {
  const keys = Object.keys(options)

  useEffect(() => {
    if (value && setValue) {
      setValue(name, value)
    }
  }, [])

  const handleChange = useCallback(
    (event: SelectChangeEvent<string>, child: React.ReactNode) => {
      if (setValue) {
        setValue(name, event.target.value)
      }
      if (onChange) {
        onChange(event, child)
      }
    },
    [name, onChange, setValue],
  )

  return (
    <MuiSelect {...rest} className={classes} onChange={handleChange}>
      {keys.map((key) => (
        <MenuItem key={key} value={options[key]}>
          {key}
        </MenuItem>
      ))}
    </MuiSelect>
  )
}
