import { ChangeEvent, useCallback, useEffect } from 'react'

import MuiTextField, { TextFieldProps } from '@mui/material/TextField'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

export type Props = {
  setValue: UseFormSetValue<FieldValues>
  class?: string
} & TextFieldProps

export function TextField({
  name = 'text-field',
  value,
  onChange = () => null,
  setValue,
  class: classes,
  ...rest
}: Props) {
  useEffect(() => {
    if (value) {
      setValue(name, value)
    }
  })

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(name, event.target.value)
      onChange(event)
    },
    [name, onChange, setValue],
  )

  return <MuiTextField {...rest} className={classes} id={name} onChange={handleChange} />
}
