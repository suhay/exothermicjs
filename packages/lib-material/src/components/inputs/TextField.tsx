import { ChangeEvent, useCallback, useEffect } from 'react'

import MuiTextField, { TextFieldProps } from '@mui/material/TextField'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

export type Props = {
  setValue?: UseFormSetValue<FieldValues>
  class?: string
} & TextFieldProps

export function TextField({
  name = 'text-field',
  value,
  setValue,
  class: classes,
  onChange,
  ...rest
}: Props) {
  useEffect(() => {
    if (value && setValue) {
      setValue(name, value)
    }
  }, [])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (setValue) {
        setValue(name, event.target.value)
      }
      if (onChange) {
        onChange(event)
      }
    },
    [name, onChange, setValue],
  )

  return <MuiTextField {...rest} className={classes} id={name} onChange={handleChange} />
}
