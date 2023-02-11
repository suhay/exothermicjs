import { Text as SlateText } from 'slate'

export function Leaf({
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

    if (leaf.strikeThrough) {
      children = <del>{children}</del>
    }
  }

  return <span {...attributes}>{children}</span>
}
