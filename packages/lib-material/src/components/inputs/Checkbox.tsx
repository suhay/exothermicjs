import { useCallback, useEffect } from 'react'

import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

export type Props = {
  setValue?: UseFormSetValue<FieldValues>
  label: string
  class?: string
} & CheckboxProps

export function Checkbox({
  onChange,
  label,
  class: classes,
  checked,
  setValue,
  name = 'checkbox-field',
  ...rest
}: Props) {
  useEffect(() => {
    if (setValue) {
      setValue(name, checked)
    }
  })

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, ckd: boolean) => {
      if (setValue) {
        setValue(name, ckd)
      }
      if (onChange) {
        onChange(event, ckd)
      }
    },
    [name, onChange, setValue],
  )

  return (
    <FormControlLabel
      className={classes}
      control={<MuiCheckbox onChange={handleChange} {...rest} />}
      label={label}
    />
  )
}
