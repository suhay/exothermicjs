import MuiTextField from '@mui/material/TextField'
import { ChangeEvent, useEffect } from 'react'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

type Props = {
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
  onChange = () => {},
  InputProps,
  setValue,
}: Props) {
  useEffect(() => {
    if (value) {
      setValue(name, value)
    }
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(name, event.target.value)
    onChange(event)
  }

  return (
    <MuiTextField
      id={name}
      label={label}
      variant={variant}
      value={value}
      onChange={handleChange}
      InputProps={InputProps}
    />
  )
}
