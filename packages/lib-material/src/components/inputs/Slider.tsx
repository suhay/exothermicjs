import { useCallback, useEffect } from 'react'

import MuiSlider, { SliderProps } from '@mui/material/Slider'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

export type Props = {
  name: string
  setValue?: UseFormSetValue<FieldValues>
  class?: string
} & SliderProps

export function Slider({ class: classes, setValue, name, onChange, value, ...rest }: Props) {
  useEffect(() => {
    if (value && setValue) {
      setValue(name, value)
    }
  }, [])

  const handleChange = useCallback(
    (event: Event, val: number | number[], activeThumb: number) => {
      if (setValue) {
        setValue(name, val)
      }
      if (onChange) {
        onChange(event, val, activeThumb)
      }
    },
    [name, onChange, setValue],
  )

  return <MuiSlider className={classes} {...rest} onChange={handleChange} />
}
