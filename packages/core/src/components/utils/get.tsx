import { Suspense } from 'react'

import { useExothermicWithSuspense } from '~/hooks/useExothermic'
import { PageFragment } from './PageFragment'
import { Loading } from './Loading'

export type Props = {
  path: string
}

export function Get({ path }: Props) {
  const exothermicTemplate = useExothermicWithSuspense(path)
  const data = exothermicTemplate.load()

  return (
    <Suspense fallback={<Loading />}>
      <PageFragment {...data} class={`get-loaded get__${path.replaceAll('/', '-')}`} />
    </Suspense>
  )
}
