import { ReactNode } from 'react'

import ToggleButton from '@mui/material/ToggleButton'
import { BaseEditor, Editor, Element as SlateElement, Transforms } from 'slate'
import { ReactEditor, useSlate } from 'slate-react'

import { ElementType } from '../types'

const LIST_TYPES = ['ol_list', 'ul_list']

const isBlockActive = (
  editor: BaseEditor & ReactEditor,
  format: ElementType,
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

const toggleBlock = (editor: BaseEditor & ReactEditor, format: ElementType) => {
  if (!format) return

  const isList = LIST_TYPES.includes(format)
  const isActive = isBlockActive(editor, format)

  Transforms.unwrapNodes(editor, {
    match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && LIST_TYPES.includes(n.type),
    split: true,
  })

  let type = format
  if (isActive) {
    type = 'paragraph'
  } else if (isList) {
    type = 'list_item'
  }

  const newProperties = {
    type,
  }

  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block: SlateElement = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export function BlockButton({ format, icon }: { format: ElementType; icon: ReactNode }) {
  const editor = useSlate()
  return (
    <ToggleButton
      value={format}
      aria-label={format}
      selected={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      {icon}
    </ToggleButton>
  )
}
