import yaml from 'js-yaml'

export const SecureYamlType = (_yaml: unknown, explicitName?: string) =>
  new yaml.Type(`!${explicitName ?? 'secure'}`, {
    kind: 'mapping',
    // resolve(data: AppwriteApiWrapper) {
    //   return !!data
    // },
    // construct(data: AppwriteApiWrapper) {
    //   return <AppwriteWrapper key={guid()} {...data} />
    // },
    // instanceOf: AppwriteWrapper,
  })
