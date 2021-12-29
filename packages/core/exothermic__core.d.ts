import { LoaderFile } from './src/hooks/useLoader'
import { LinkProps } from './src/components/navbar/link'
import { Config } from './src/types'
import { ContentProps } from './src/components/utils/content'

declare module '@exothermic/core' {
  /**
   * Fetches a text based file from the provided route and returns it along with its loading state
   *
   * @version 2.0.0-beta.0
   */
  const useLoader: (route: string) => LoaderFile

  /**
   * Returns the current config context from the store, or fetches it from the server if one does not exist
   *
   * @version 2.0.0-beta.0
   */
  const useConfig: () => Config

  /**
   * @version 2.0.0-beta.0
   */
  const Content: (props: ContentProps) => JSX.Element

  const Link: (props: LinkProps) => JSX.Element

  const guid: () => string
}
