import { Loading, useConfig, useLoader } from '@exothermic/core'
import { ReactNode, useEffect, useState, cloneElement, ReactElement } from 'react'

import { BlogArticle, BlogManifest } from '../types'

export type Props = {
  template: ReactElement
  content: ReactNode
  date: string
  class?: string
}

export function BlogArticle({ class: classProps, template, content, date }: Props) {
  const config = useConfig()
  const [manifestPath, setManifestPath] = useState<string>()
  const { data: rawManifest, status } = useLoader(manifestPath)
  const [manifest, setManifest] = useState<BlogManifest>()
  const [article, setArticle] = useState<BlogArticle>()

  useEffect(() => {
    if (config) {
      const plugin = config.plugins?.find((plug) => plug.resolve === '@exothermic/plugin-blog')
      setManifestPath(`${plugin?.options?.path ?? ''}/_manifest.json`)
    }
  }, [config])

  useEffect(() => {
    if (rawManifest) {
      const man = JSON.parse(rawManifest) as BlogManifest
      setManifest(man)
      setArticle(man[date])
    }
  }, [date, rawManifest])

  if (status === 'LOADING') {
    return <Loading />
  }

  if (!manifest || !article) {
    return <>No article found!</>
  }

  const component = cloneElement(template, {
    data: article,
    content,
  })

  return <article className={classProps ?? ''}>{component}</article>
}
