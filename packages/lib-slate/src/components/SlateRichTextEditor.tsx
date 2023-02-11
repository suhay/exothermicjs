import { useCallback, useMemo, useState } from 'react'

import Paper from '@mui/material/Paper'
import { EditListPlugin } from '@productboard/slate-edit-list'
import isHotkey from 'is-hotkey'
import markdown from 'remark-parse'
import remarkSlate, { serialize } from 'remark-slate'
import { BaseEditor, createEditor, Descendant } from 'slate'
import { withHistory } from 'slate-history'
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from 'slate-react'
import { unified } from 'unified'

import { EditorToolbar } from './EditorToolbar'
import { Element } from './Element'
import { Leaf } from './Leaf'
import { toggleMark } from './MarkButton'
import { withShortcuts } from './withShortcuts'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+`': 'code',
  'mod+s': 'strikethrough',
}

export type Props = {
  value?: string | null
  label?: string
  name: string
  onChange?: (value: string | null, keyboardInputValue?: string | undefined) => void
  class?: string
}

const [withEditList, onKeyDown] = EditListPlugin()

export function SlateRichTextEditor({
  value: initialValue,
  onChange = () => null,
  class: classes,
}: Props) {
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])

  const editor = useMemo(
    () =>
      withEditList(withShortcuts(withHistory(withReact(createEditor())))) as BaseEditor &
        ReactEditor,
    [],
  )

  const deserializedInitialValue = useMemo(
    () =>
      unified()
        .use(markdown)
        .use(remarkSlate)
        .processSync(initialValue ?? '').result as Descendant[],
    [],
  )

  const [value, setValue] = useState<Descendant[]>(
    deserializedInitialValue?.length > 0
      ? deserializedInitialValue
      : [
          {
            type: 'paragraph',
            children: [
              {
                text: '',
              },
            ],
          },
        ],
  )

  const handleChange = useCallback(
    (nextValue: Descendant[]) => {
      setValue(nextValue)
      const content = nextValue.map((val) => serialize(val)).join('\n')
      onChange(content)
    },
    [onChange],
  )

  return (
    <Slate editor={editor} value={value} onChange={handleChange}>
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

            onKeyDown(editor)(event)
          }}
        />
      </Paper>
    </Slate>
  )
}
