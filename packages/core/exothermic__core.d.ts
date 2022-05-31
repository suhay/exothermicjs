import { LoaderFile } from './src/hooks/useLoader'
import { LinkProps } from './src/components/navbar/link'
import { Config } from './src/types'
import { ContentProps } from './src/components/utils/content'
import { Loading } from './src/components/utils/loading'
import { UserState } from './src/contexts/user'
import { PluginState } from './src/contexts/plugin'

declare module '@exothermic/core' {
  /**
   * Fetches a text based file from the provided route and returns it along with its loading state
   *
   * @version 2.0.0-beta.0
   */
  const useLoader: (route?: string) => LoaderFile

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

  const Loading: (props) => JSX.Element

  const guid: () => string

  const UserContext: React.Context<UserState>

  const PluginContext: React.Context<PluginState>
}
