import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

export type CustomElementType =
  | 'paragraph'
  | 'block-quote'
  | 'bulleted-list'
  | 'heading-one'
  | 'heading-two'
  | 'list-item'
  | 'numbered-list'

export type TextAlign = 'left' | 'center' | 'right' | 'justify'

type CustomText =
  | {
      bold?: boolean
      code?: boolean
      italic?: boolean
      text: string
      underline?: boolean
    }
  | null
  | string

export type CustomElement = { type: CustomElementType; children: CustomText[]; align?: TextAlign }

export type CustomFormat = 'bold' | 'italic' | 'underline' | 'code'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
