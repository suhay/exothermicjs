import { BlockType, LeafType } from 'remark-slate'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

export type ElementType =
  | 'paragraph'
  | 'block_quote'
  | 'code_block'
  | 'link'
  | 'ul_list'
  | 'ol_list'
  | 'list_item'
  | 'heading_one'
  | 'heading_two'
  | 'heading_three'
  | 'heading_four'
  | 'heading_five'
  | 'heading_six'

// paragraph: 'paragraph',
// block_quote: 'block_quote',
// code_block: 'code_block',
// link: 'link',
// ul_list: 'ul_list',
// ol_list: 'ol_list',
// listItem: 'list_item',
// heading: {
//   1: 'heading_one',
//   2: 'heading_two',
//   3: 'heading_three',
//   4: 'heading_four',
//   5: 'heading_five',
//   6: 'heading_six',
// },
// emphasis_mark: 'italic',
// strong_mark: 'bold',
// delete_mark: 'strikeThrough',
// inline_code_mark: 'code',
// thematic_break: 'thematic_break',
// image: 'image',

// export type TextAlign = 'left' | 'center' | 'right' | 'justify'

// type CustomText =
//   | {
//       bold?: boolean
//       code?: boolean
//       italic?: boolean
//       text: string
//       underline?: boolean
//     }
//   | null
//   | string

// export type CustomElement = { type: CustomElementType; children: CustomText[]; align?: TextAlign }

export type Format = 'strikeThrough' | 'bold' | 'italic' | 'code'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: BlockType
    Text: LeafType
  }
}
