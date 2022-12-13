import { ReactNode } from 'react'

import ToggleButton from '@mui/material/ToggleButton'
import { BaseEditor, Editor, Element as SlateElement, Transforms } from 'slate'
import { ReactEditor, useSlate } from 'slate-react'

import { CustomElementType, TextAlign } from '../types'

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

const isBlockActive = (
  editor: BaseEditor & ReactEditor,
  format: CustomElementType | TextAlign,
  blockType = 'type',
) => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n[blockType] === format,
    }),
  )

  return !!match
}

const toggleBlock = (editor: BaseEditor & ReactEditor, format: CustomElementType | TextAlign) => {
  if (!format) return

  const isAlignment = TEXT_ALIGN_TYPES.includes(format)
  const isList = LIST_TYPES.includes(format)
  const isActive = isBlockActive(editor, format, isAlignment ? 'align' : 'type')

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !isAlignment,
    split: true,
  })
  let newProperties: Partial<SlateElement>
  if (isAlignment) {
    newProperties = {
      align: isActive ? undefined : (format as TextAlign),
    }
  } else {
    let type = format as CustomElementType
    if (isActive) {
      type = 'paragraph'
    } else if (isList) {
      type = 'list-item'
    }

    newProperties = {
      type,
    }
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block: SlateElement = { type: format as CustomElementType, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export function BlockButton({ format, icon }: { format: CustomElementType; icon: ReactNode }) {
  const editor = useSlate()
  return (
    <ToggleButton
      value={format}
      aria-label={format}
      selected={isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      {icon}
    </ToggleButton>
  )
}
