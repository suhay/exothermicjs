import { ReactNode } from 'react'

export type ArgPropType = {
  [x: string]: string | number | boolean | null
}

export type OrPropType = {
  or: ArgPropType[]
}

export type AndPropType = {
  and: ArgPropType[]
}

export type IfPropType = OrPropType | AndPropType | ArgPropType

export type Props = {
  if: IfPropType[]
  then: ReactNode[]
  else?: ReactNode[]
}
