import { useExothermic } from '../../hooks/useExothermic'
import { PageFragment } from './fragment'
import { Loading } from './loading'

type Props = {
  path: string
}

export function Get({ path }: Props) {
  const { data, status } = useExothermic(path)

  if (status === 'LOADING') {
    return <Loading type='shimmer' />
  }

  if (!data) {
    return null
  }

  return <PageFragment {...data} class='get-loaded' />
}
