import { Config } from '../types'
import { wrapPromise } from './suspendablePromise'

export type BootStrap = {
  config: {
    load: () => Config
  }
}

const fetchConfig = () =>
  fetch('/exothermic.config.json')
    .then((resp) => resp.json())
    .then((file) => file as Config)
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
