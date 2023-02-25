import { Element as SlateElement } from 'slate'

// emphasis_mark: 'italic',
// strong_mark: 'bold',
// delete_mark: 'strikeThrough',
// inline_code_mark: 'code',
// thematic_break: 'thematic_break',
// image: 'image',

export function Element({
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
  switch (element.type) {
    case 'block_quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'code_block':
      return <pre {...attributes}>{children}</pre>
    case 'link':
      return <a {...attributes}>{children}</a>
    case 'ul_list':
      return <ul {...attributes}>{children}</ul>
    case 'ol_list':
      return <ol {...attributes}>{children}</ol>
    case 'list_item':
      return <li {...attributes}>{children}</li>
    case 'heading_one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading_two':
      return <h2 {...attributes}>{children}</h2>
    case 'heading_three':
      return <h3 {...attributes}>{children}</h3>
    case 'heading_four':
      return <h4 {...attributes}>{children}</h4>
    case 'heading_five':
      return <h5 {...attributes}>{children}</h5>
    case 'heading_six':
      return <h6 {...attributes}>{children}</h6>
    case 'paragraph':
    default:
      return <p {...attributes}>{children}</p>
  }
}
