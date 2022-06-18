import TextField from '@mui/material/TextField'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTime } from 'luxon'
import { useEffect } from 'react'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

type Props = {
  value?: string | null
  label?: string
  name: string
  onChange?: (value: string | null, keyboardInputValue?: string | undefined) => void
  setValue: UseFormSetValue<FieldValues>
}

export function DatePicker({ name, value, label, onChange = () => {}, setValue }: Props) {
  useEffect(() => {
    if (!value) {
      setValue(name, DateTime.now().toISO())
    }
  }, [])
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <MuiDatePicker
        label={label ?? 'Date picker'}
        value={value}
        onChange={(value: string | DateTime | null, keyboardInputValue?: string | undefined) => {
          if (value instanceof DateTime) {
            onChange(value.toISO(), keyboardInputValue)
          } else {
            onChange(value, keyboardInputValue)
          }
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
