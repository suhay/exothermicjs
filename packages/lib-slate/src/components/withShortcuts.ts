import { BlockType } from 'remark-slate'
import { BaseEditor, Editor, Element as SlateElement, Point, Range, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'

const SHORTCUTS = {
  '*': 'list_item',
  '-': 'list_item',
  '+': 'list_item',
  '1.': 'list_item',
  '>': 'block_quote',
  '#': 'heading_one',
  '##': 'heading_two',
  '###': 'heading_three',
  '####': 'heading_four',
  '#####': 'heading_five',
  '######': 'heading_six',
}

export const withShortcuts = (editor: BaseEditor & ReactEditor) => {
  const { deleteBackward, insertText } = editor

  editor.insertText = (text) => {
    const { selection } = editor

    if (
      selection &&
      selection.anchor.offset <= 7 &&
      text.endsWith(' ') &&
      Range.isCollapsed(selection)
    ) {
      const { anchor } = selection
      const block = Editor.above(editor, {
        match: (n) => Editor.isBlock(editor, n),
      })
      const path = block ? block[1] : []
      const start = Editor.start(editor, path)
      const range = { anchor, focus: start }
      const beforeText = Editor.string(editor, range) + text.slice(0, -1)
      const type = SHORTCUTS[beforeText]

      if (type) {
        Transforms.select(editor, range) // selects the shortcut mark

        if (!Range.isCollapsed(range)) {
          Transforms.delete(editor) // deletes the shortcut mark
        }

        if (type === 'list_item') {
          const list: BlockType = {
            type: beforeText === '1.' ? 'ol_list' : 'ul_list',
            children: [
              {
                type: 'list_item',
                children: [],
              },
            ],
          }

          Transforms.wrapNodes(editor, list, {
            match: (n) =>
              !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'paragraph',
          })

          return
        }

        const newProperties: Partial<SlateElement> = {
          type,
        }
        Transforms.setNodes<SlateElement>(editor, newProperties, {
          match: (n) => Editor.isBlock(editor, n),
        })

        return
      }
    }

    insertText(text)
  }

  editor.deleteBackward = (...args) => {
    const { selection } = editor

    if (selection && Range.isCollapsed(selection)) {
      const match = Editor.above(editor, {
        match: (n) => Editor.isBlock(editor, n),
      })

      if (match) {
        const [block, path] = match
        const start = Editor.start(editor, path)

        if (
          !Editor.isEditor(block) &&
          SlateElement.isElement(block) &&
          block.type !== 'paragraph' &&
          Point.equals(selection.anchor, start)
        ) {
          const newProperties: Partial<SlateElement> = {
            type: 'paragraph',
          }
          Transforms.setNodes(editor, newProperties)

          if (block.type === 'list_item') {
            Transforms.unwrapNodes(editor, {
              match: (n) =>
                !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'ul_list',
              split: true,
            })
          }

          return
        }
      }

      deleteBackward(...args)
    }
  }

  return editor
}
