import { Config } from '../types'
import { wrapPromise } from './suspendablePromise'

export type BootStrap = {
  config: {
    load: () => Config | undefined
  }
}

const fetchConfig = () =>
  fetch('/exothermic.config.json')
    .then((resp) => resp.json())
    .then((file: Config) => file)
    .catch(
      () =>
        ({
          pagePath: '/pages',
        } as Config),
    )

export const bootstrap = (): BootStrap => {
  const configPromise = fetchConfig()

  return {
    config: wrapPromise(configPromise),
  }
}
