import { useExothermic } from '~/hooks/useExothermic'
import { PageFragment } from './PageFragment'
import { Loading } from './Loading'

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
