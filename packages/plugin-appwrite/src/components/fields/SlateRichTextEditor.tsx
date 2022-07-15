import {
  Code,
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
} from '@mui/icons-material'
import { Paper, SvgIcon, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles'
import isHotkey from 'is-hotkey'
import { marked } from 'marked'
import { ReactNode, useCallback, useMemo } from 'react'
import {
  BaseEditor,
  createEditor,
  Descendant,
  Editor,
  Element as SlateElement,
  Text as SlateText,
  Transforms,
} from 'slate'
import { withHistory } from 'slate-history'
import { jsx } from 'slate-hyperscript'
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  useSlate,
  withReact,
} from 'slate-react'

import { CustomElementType, CustomFormat, TextAlign } from '../../types'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

export type Props = {
  value?: string | null
  label?: string
  name: string
  onChange?: (value: string | null, keyboardInputValue?: string | undefined) => void
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& button': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))

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

function BlockButton({ format, icon }: { format: CustomElementType; icon: ReactNode }) {
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

const isMarkActive = (editor: BaseEditor & ReactEditor, format: string | number) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const toggleMark = (editor: BaseEditor & ReactEditor, format: string) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

function MarkButton({ format, icon }: { format: CustomFormat; icon: ReactNode }) {
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

function EditorToolbar() {
  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
      }}
    >
      <StyledToggleButtonGroup size='small'>
        <MarkButton format='bold' icon={<FormatBold />} />
        <MarkButton format='italic' icon={<FormatItalic />} />
        <MarkButton format='underline' icon={<FormatUnderlined />} />
        <MarkButton format='code' icon={<Code />} />
        <BlockButton
          format='heading-one'
          icon={
            <SvgIcon>
              <path d='M3 2v4.747h1.656l.383-2.568.384-.311h3.88V15.82l-.408.38-1.56.12V18h7.174v-1.68l-1.56-.12-.407-.38V3.868h3.879l.36.311.407 2.568h1.656V2z' />
            </SvgIcon>
          }
        />
        <BlockButton
          format='heading-two'
          icon={
            <SvgIcon>
              <path d='M4 5.5v4.74h1.657l.384-2.569.384-.312h2.733v8.461l-.41.38-1.91.12V18h7.179v-1.68l-1.912-.12-.405-.38V7.359h2.729l.36.312.408 2.57h1.657V5.5z' />
            </SvgIcon>
          }
        />
        <BlockButton format='block-quote' icon={<FormatQuote />} />
        <BlockButton format='numbered-list' icon={<FormatListNumbered />} />
        <BlockButton format='bulleted-list' icon={<FormatListBulleted />} />
      </StyledToggleButtonGroup>
      {/* <Divider flexItem orientation='vertical' sx={{ mx: 0.5, my: 1 }} />
      <StyledToggleButtonGroup size='small'>
        <BlockButton format='left' icon={<FormatAlignLeft />} />
        <BlockButton format='center' icon={<FormatAlignCenter />} />
        <BlockButton format='right' icon={<FormatAlignRight />} />
        <BlockButton format='justify' icon={<FormatAlignJustify />} />
      </StyledToggleButtonGroup> */}
    </Paper>
  )
}

function Element({
  attributes,
  children,
  element,
}: {
  attributes: {
    'data-slate-node': 'element'
    'data-slate-inline'?: true
    'data-slate-void'?: true
    dir?: 'rtl'
    ref: any
  }
  children: JSX.Element[]
  element: SlateElement
}) {
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
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'heading-two':
      return (
        <h3 style={style} {...attributes}>
          {children}
        </h3>
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

function Leaf({
  attributes,
  children,
  leaf,
}: {
  attributes: any
  children: JSX.Element
  leaf: SlateText
}) {
  if (leaf == null) {
    return null
  }

  if (typeof leaf !== 'string') {
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
      children = <ins>{children}</ins>
    }
  }

  return <span {...attributes}>{children}</span>
}

export function SlateRichTextEditor({ value, onChange: setValue = () => null }: Props) {
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  const serializeChildren = useCallback(
    (children: SlateText[], joinOn: string) =>
      children
        .map((child) => {
          if (child == null) {
            return null
          }
          if (typeof child === 'string') {
            return child
          }

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
          return str === ' ' ? '' : str
        })
        .join(joinOn),
    [],
  )

  const serialize = useCallback(
    (descendants: Descendant[]): string =>
      descendants
        .map((descendant) => {
          if (SlateElement.isElement(descendant)) {
            switch (descendant.type) {
              case 'block-quote':
                return `> ${serializeChildren(descendant.children, '\n> ')}`
              case 'bulleted-list':
                return `- ${serialize(descendant.children)}`
              case 'heading-one':
                return `## ${serializeChildren(descendant.children, '')}`
              case 'heading-two':
                return `### ${serializeChildren(descendant.children, '')}`
              case 'numbered-list':
                return `1. ${serialize(descendant.children)}`
              default:
                return serializeChildren(descendant.children, '')
            }
          }
          return ''
        })
        .join('\n'),
    [serializeChildren],
  )

  const htmlDeserializer = useCallback(
    (el: HTMLElement, markAttributes: Partial<SlateText> = {}): Descendant | Array<Descendant> => {
      if (el.nodeType === Node.TEXT_NODE) {
        if (el.textContent !== '\n') {
          return jsx('text', markAttributes ?? undefined, el.textContent)
        }
        return null
      }
      if (el.nodeType !== Node.ELEMENT_NODE) {
        return null
      }

      const nodeAttributes: Partial<SlateText> =
        markAttributes == null || typeof markAttributes === 'string' ? {} : { ...markAttributes }

      switch (el.nodeName) {
        case 'STRONG':
          nodeAttributes.bold = true
          break
        case 'EM':
          nodeAttributes.italic = true
          break
        case 'CODE':
          nodeAttributes.code = true
          break
        case 'INS':
          nodeAttributes.underline = true
          break
        default:
      }

      const children = Array.from(el.childNodes)
        .map((node) => htmlDeserializer(node as HTMLElement, nodeAttributes))
        .flat()

      if (children.length === 0) {
        children.push(jsx('text', nodeAttributes, ''))
      }

      switch (el.nodeName) {
        case 'BODY':
          return jsx('fragment', {}, children)
        case 'BLOCKQUOTE':
          return jsx('element', { type: 'block-quote' }, children)
        case 'P':
          return jsx('element', { type: 'paragraph' }, children)
        case 'A':
          return jsx('element', { type: 'link', url: el.getAttribute('href') }, children)
        case 'H2':
          return jsx('element', { type: 'heading-one' }, children)
        case 'H3':
          return jsx('element', { type: 'heading-two' }, children)
        case 'UL':
          return jsx('element', { type: 'bulleted-list' }, children)
        case 'OL':
          return jsx('element', { type: 'numbered-list' }, children)
        case 'LI':
          return jsx('element', { type: 'list-item' }, children)
        default:
          return children
      }
    },
    [],
  )

  const deserialize = useCallback(
    (val?: string | null): Array<Descendant> => {
      if (val == null) {
        return [
          {
            type: 'paragraph',
            children: [{ text: '' }],
          },
        ]
      }

      const parsedContent = marked.parse(val)
      const document = new DOMParser().parseFromString(parsedContent, 'text/html')
      const deserialized = htmlDeserializer(document.body)

      if (Array.isArray(deserialized)) {
        return deserialized
      }

      if (deserialized == null) {
        return []
      }

      return [deserialized]
    },
    [htmlDeserializer],
  )

  const initialValue: Descendant[] = deserialize(value)

  const onChange = useCallback(
    (val: Descendant[]) => {
      const isAstChange = editor.operations.some((op) => op.type !== 'set_selection')
      if (isAstChange) {
        const content = serialize(val)
        setValue(content)
      }
    },
    [editor.operations, serialize, setValue],
  )

  return (
    <Slate editor={editor} value={initialValue} onChange={onChange}>
      <EditorToolbar />
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
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const mark: string = HOTKEYS[hotkey]
              toggleMark(editor, mark)
            }
          })
        }}
      />
    </Slate>
  )
}
