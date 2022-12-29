import { useCallback, useMemo } from 'react'

import Paper from '@mui/material/Paper'
import isHotkey from 'is-hotkey'
import { createEditor, Descendant } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react'

import { EditorToolbar } from './EditorToolbar'
import { Element } from './Element'
import { Leaf } from './Leaf'
import { toggleMark } from './MarkButton'
import { deserialize, serialize } from './serializers'
import { withShortcuts } from './withShortcuts'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

export type Props = {
  value?: string | null
  label?: string
  name: string
  onChange?: (value: string | null, keyboardInputValue?: string | undefined) => void
  class?: string
}

export function SlateRichTextEditor({
  value,
  onChange: setValue = () => null,
  class: classes,
}: Props) {
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])
  const editor = useMemo(() => withShortcuts(withHistory(withReact(createEditor()))), [])

  const initialValue: Descendant[] = deserialize(value)

  const onChange = useCallback(
    (val: Descendant[]) => {
      const isAstChange = editor.operations.some((op) => op.type !== 'set_selection')
      if (isAstChange) {
        const content = serialize(val)
        setValue(content)
      }
    },
    [editor.operations, setValue],
  )

  return (
    <Slate editor={editor} value={initialValue} onChange={onChange}>
      <EditorToolbar />
      <Paper
        elevation={0}
        sx={{
          border: 0,
        }}
        className={classes}
      >
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder='Write something new...'
          spellCheck
          autoFocus
          onKeyDown={(event) => {
            Object.keys(HOTKEYS).forEach((hotkey) => {
              if (isHotkey(hotkey, event)) {
                event.preventDefault()
                const mark: string = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            })
          }}
        />
      </Paper>
    </Slate>
  )
}
