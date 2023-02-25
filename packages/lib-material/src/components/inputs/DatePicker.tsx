import { useEffect } from 'react'

import TextField from '@mui/material/TextField'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePickerProps } from '@mui/x-date-pickers'
import { DateTime } from 'luxon'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

export type Props = {
  name: string
  class?: string
  setValue: UseFormSetValue<FieldValues>
} & DatePickerProps<string, string>

export function DatePicker({
  name,
  value,
  label,
  onChange = () => null,
  setValue,
  class: classes,
}: Props) {
  useEffect(() => {
    if (!value) {
      setValue(name, DateTime.now().toISO())
    }
  }, [name, setValue, value])
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <MuiDatePicker
        label={label ?? 'Date picker'}
        value={value}
        onChange={(val: string | DateTime | null, keyboardInputValue?: string | undefined) => {
          if (val instanceof DateTime) {
            onChange(val.toISO(), keyboardInputValue)
          } else {
            onChange(val, keyboardInputValue)
          }
        }}
        renderInput={(params) => <TextField {...params} className={classes} />}
      />
    </LocalizationProvider>
  )
}
