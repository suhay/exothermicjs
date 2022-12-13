import { marked } from 'marked'
import { Descendant, Element as SlateElement, Text as SlateText } from 'slate'
import { jsx } from 'slate-hyperscript'

function serializeChildren(children: SlateText[], joinOn: string): string {
  return children
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
    .join(joinOn)
}

export function serialize(descendants: Descendant[]): string {
  return descendants
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
    .join('\n')
}

function htmlDeserializer(
  el: HTMLElement,
  markAttributes: Partial<SlateText> = {},
): Descendant | Array<Descendant> {
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
}

export function deserialize(val?: string | null): Array<Descendant> {
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
}
