import { ReactNode, Suspense } from 'react'

import { useExothermicWithSuspense } from '~/hooks/useExothermic'
import { PageFragment } from './PageFragment'
import { Loading } from './Loading'

export type Props = {
  path: string
  content?: ReactNode
  data?: Record<string, string>
}

export function Get({ path, content, data: dataProp }: Props) {
  const exothermicTemplate = useExothermicWithSuspense(path)
  const data = exothermicTemplate.load()

  return (
    <Suspense fallback={<Loading />}>
      <PageFragment
        {...data}
        content={content}
        data={dataProp}
        class={`get-loaded get__${path.replaceAll('/', '-')}`}
      />
    </Suspense>
  )
}
