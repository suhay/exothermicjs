import { ReactNode } from 'react'

import ToggleButton from '@mui/material/ToggleButton'
import { BaseEditor, Editor } from 'slate'
import { ReactEditor, useSlate } from 'slate-react'

import { Format } from '../types'

const isMarkActive = (editor: BaseEditor & ReactEditor, format: string | number) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

export const toggleMark = (editor: BaseEditor & ReactEditor, format: string) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

export function MarkButton({ format, icon }: { format: Format; icon: ReactNode }) {
  const editor = useSlate()
  return (
    <ToggleButton
      value={format}
      aria-label={format}
      selected={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {icon}
    </ToggleButton>
  )
}
