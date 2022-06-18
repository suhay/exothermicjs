import { SlateRichTextEditor } from '~/components/fields/SlateRichTextEditor'

export const RichTextEditorYamlType = (yaml: any, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'rich-text-editor'}`, {
    kind: 'mapping',
    resolve(data: any) {
      return !!data
    },
    construct(data: any) {
      return <SlateRichTextEditor key={data.name} name={data.name} label={data.label} />
    },
    instanceOf: SlateRichTextEditor,
  })
