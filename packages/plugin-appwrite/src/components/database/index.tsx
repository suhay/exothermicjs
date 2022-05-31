import { useContext } from 'react'
import { PluginContext } from '@exothermic/core'

export function Database({ action }: { action: string }) {
  const { dispatch, state: pluginState } = useContext(PluginContext)

  switch (action) {
    case 'login':

    default:
      return null
  }
}
