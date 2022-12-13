import { ChangeEvent, useCallback, useEffect } from 'react'

import MuiTextField from '@mui/material/TextField'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

export type Props = {
  value?: string | null
  label?: string
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  variant?: 'filled' | 'outlined' | 'standard'
  InputProps?: any
  setValue: UseFormSetValue<FieldValues>
}

export function TextField({
  variant = 'outlined',
  name,
  value,
  label,
  onChange = () => null,
  InputProps,
  setValue,
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

  return (
    <MuiTextField
      id={name}
      label={label}
      variant={variant}
      value={value}
      onChange={handleChange}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      InputProps={InputProps}
    />
  )
}
