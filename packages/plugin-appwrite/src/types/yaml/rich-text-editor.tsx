import yaml from 'js-yaml'

import { Props, SlateRichTextEditor } from '~/components/fields/SlateRichTextEditor'

export const RichTextEditorYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'rich-text-editor'}`, {
    kind: 'mapping',
    resolve(data: Props) {
      return !!data
    },
    construct(data: Props) {
      return <SlateRichTextEditor key={data.name} name={data.name} label={data.label} />
    },
    instanceOf: SlateRichTextEditor,
  })
