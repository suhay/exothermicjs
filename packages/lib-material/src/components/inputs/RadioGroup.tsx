import { useCallback, useEffect } from 'react'

import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import MuiRadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

export type Props = {
  setValue?: UseFormSetValue<FieldValues>
  class?: string
  options: Record<string, string>
  name: string
} & RadioGroupProps

export function RadioGroup({
  options,
  class: classes,
  value,
  setValue,
  name,
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
    (event: React.ChangeEvent<HTMLInputElement>, val: string) => {
      if (setValue) {
        setValue(name, val)
      }
      if (onChange) {
        onChange(event, val)
      }
    },
    [name, onChange, setValue],
  )

  return (
    <MuiRadioGroup {...rest} className={classes} onChange={handleChange}>
      {keys.map((key) => (
        <FormControlLabel value={key} key={key} control={<Radio />} label={options[key]} />
      ))}
    </MuiRadioGroup>
  )
}
