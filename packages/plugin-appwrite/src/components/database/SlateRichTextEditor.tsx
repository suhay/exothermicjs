import Code from '@mui/icons-material/Code'
import FormatAlignCenter from '@mui/icons-material/FormatAlignCenter'
import FormatAlignJustify from '@mui/icons-material/FormatAlignJustify'
import FormatAlignLeft from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRight from '@mui/icons-material/FormatAlignRight'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalic from '@mui/icons-material/FormatItalic'
import FormatListBulleted from '@mui/icons-material/FormatListBulleted'
import FormatListNumbered from '@mui/icons-material/FormatListNumbered'
import FormatQuote from '@mui/icons-material/FormatQuote'
import FormatUnderlined from '@mui/icons-material/FormatUnderlined'
import LooksOne from '@mui/icons-material/LooksOne'
import LooksTwo from '@mui/icons-material/LooksTwo'
import { Button, Icon, IconButton, Toolbar } from '@mui/material'
import isHotkey from 'is-hotkey'
import { useCallback, useMemo } from 'react'
import {
  createEditor,
  Descendant,
  Editor,
  Element as SlateElement,
  Text as SlateText,
  Transforms,
} from 'slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, useSlate, withReact } from 'slate-react'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

export const SlateRichTextEditor = ({
  value,
  setValue,
}: {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}) => {
  const renderElement = useCallback((props) => <Element {...props} />, [])
  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  const serializeChildren = (children: SlateText[], joinOn: string) => {
    return children
      .map((child) => {
        let str = child.text
        if (child.bold) {
          str = `**${str}**`
        }
        if (child.code) {
          str = `\`${str}\``
        }
        if (child.italic) {
          str = `*${str}*`
        }
        if (child.underline) {
          str = `<ins>${str}</ins>`
        }
        return str
      })
      .join(joinOn)
  }

  const serializer = (val: Descendant) => {
    if (SlateElement.isElement(val)) {
      if (val.type === 'block-quote') {
        return `> ${serializeChildren(val.children, '\n> ')}`
      }
      return serializeChildren(val.children, '')
    }
    return ''
  }

  const serialize = (val: Descendant[]) => {
    return val.map(serializer).join('\n')
  }

  const deserialize = (val: string): Descendant[] => {
    return val.split('\n').map((line) => {
      return {
        children: [{ text: line }],
      } as Descendant
    })
  }

  const initialValue: Descendant[] = deserialize(value) || ''

  const onChange = (val: Descendant[]) => {
    const isAstChange = editor.operations.some((op) => 'set_selection' !== op.type)
    if (isAstChange) {
      const content = serialize(val)
      console.log('herere')
      setValue(content)
    }
  }

  return (
    <Slate editor={editor} value={initialValue} onChange={onChange}>
      <Toolbar>
        <MarkButton format='bold' icon={<FormatBoldIcon />} />
        <MarkButton format='italic' icon={<FormatItalic />} />
        <MarkButton format='underline' icon={<FormatUnderlined />} />
        <MarkButton format='code' icon={<Code />} />
        <BlockButton format='heading-one' icon={<LooksOne />} />
        <BlockButton format='heading-two' icon={<LooksTwo />} />
        <BlockButton format='block-quote' icon={<FormatQuote />} />
        <BlockButton format='numbered-list' icon={<FormatListNumbered />} />
        <BlockButton format='bulleted-list' icon={<FormatListBulleted />} />
        <BlockButton format='left' icon={<FormatAlignLeft />} />
        <BlockButton format='center' icon={<FormatAlignCenter />} />
        <BlockButton format='right' icon={<FormatAlignRight />} />
        <BlockButton format='justify' icon={<FormatAlignJustify />} />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder='Write something new...'
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              toggleMark(editor, mark)
            }
          }
        }}
      />
    </Slate>
  )
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
  )
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties: Partial<SlateElement>
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format, blockType = 'type') => {
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

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align }
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <IconButton
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
      style={
        isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')
          ? {
              color: '#000',
            }
          : {}
      }
    >
      <Icon>{icon}</Icon>
    </IconButton>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      onMouseDown={(event) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
      style={
        isMarkActive(editor, format)
          ? {
              color: '#000',
            }
          : {}
      }
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}
