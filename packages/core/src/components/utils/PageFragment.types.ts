import { ReactNode } from 'react'

export interface PageFragmentType {
  class?: string
  id?: string
  items?: ReactNode[]
  content?: string | ReactNode
  title?: string
  as?: React.ElementType
  template?: string
}
