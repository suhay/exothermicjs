import { Loading, useConfig, useLoader } from '@exothermic/core'
import { useEffect, useState } from 'react'

import { BlogManifest } from '../types'
import { MarkdownProgress } from './MarkdownProgress'
import {
  readingTime,
  showAbstract,
  showAuthor,
  showDate,
  showImage,
  showTags,
  showTitle,
} from './utils'

type Props = {
  class?: string
  options?: any[]
}

type ArticleProps = {
  date?: string
  options?: any[]
  manifest: BlogManifest
}

function Article({ date, options, manifest }: ArticleProps): JSX.Element {
  if (options?.length && date) {
    return (
      <>
        {options.map((option) => {
          const key = typeof option === 'string' ? option : ''

          switch (key) {
            case 'tags':
              return showTags(manifest[date].tags, date)
            case 'date':
              return showDate(date)
            case 'title':
              return showTitle(manifest[date].title)
            case 'abstract':
              return showAbstract(manifest[date].abstract, date)
            case 'author':
              return showAuthor(manifest[date].author, date)
            case 'readingLength':
              return readingTime('')
            case 'readingProgress':
              return <MarkdownProgress />
            case 'image':
              return showImage(manifest[date].image, date)
            default:
              return null
          }
        })}
      </>
    )
  }

  return showTitle(manifest[date ?? ''].title)
}

export function BlogArticle({ class: classProps, options = [] }: Props) {
  const config = useConfig()
  const [manifestPath, setManifestPath] = useState<string>()
  const { data, status } = useLoader(manifestPath)
  // const [pluginPath, setPluginPath] = useState<string>()
  const [manifest, setManifest] = useState<BlogManifest>()
  // const [dates, setDates] = useState<string[]>()

  useEffect(() => {
    if (config) {
      const plugin = config.plugins?.find((plug) => plug.resolve === '@exothermic/plugin-blog')
      setManifestPath(`${plugin?.options?.path ?? ''}/_manifest.json`)
      // setPluginPath(plugin.options.path)
    }
  }, [config])

  useEffect(() => {
    if (data) {
      const man = JSON.parse(data) as BlogManifest
      setManifest(man)
      // setDates(Object.keys(man))
    }
  }, [data])

  if (status === 'LOADING') {
    return <Loading />
  }

  if (!manifest) {
    return <>No article found!</>
  }

  return (
    <article className={classProps ?? ''}>
      <Article manifest={manifest} options={options} />
    </article>
  )
}
