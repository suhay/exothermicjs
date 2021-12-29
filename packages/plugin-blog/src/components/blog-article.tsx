import { useState, useEffect } from 'react'
import { useLoader, useConfig } from '@exothermic/core'

import {
  readingTime,
  showAbstract,
  showAuthor,
  showDate,
  showImage,
  showTags,
  showTitle,
} from './utils'
import { MarkdownProgress } from './blog-markdown-progress'
import { BlogManifest } from '../types'

type Props = {
  class?: string
  options?: any[]
}

export const BlogArticle = ({ class: classProps, options = [] }: Props) => {
  const config = useConfig()
  const [manifestPath, setManifestPath] = useState<string>()
  const { data, status } = useLoader(manifestPath)
  // const [pluginPath, setPluginPath] = useState<string>()
  const [manifest, setManifest] = useState<BlogManifest>()
  // const [dates, setDates] = useState<string[]>()

  useEffect(() => {
    if (config) {
      const plugin = config.plugins.find((plug) => plug.resolve === '@exothermic/plugin-blog')
      setManifestPath(`${plugin.options.path}/_manifest.json`)
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
    return <>Loading...</>
  }

  const article = (date: string) => {
    if (options.length) {
      return options.map((option) => {
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
      })
    }

    return showTitle(manifest[date].title)
  }

  return <article className={classProps ?? ''}>{article('0')}</article>
}

// <p class="text-center"><span class="blog-tag">The Exothermic Project</span><span class="blog-author">Matt Suhay</span><span class="blog-date">Jun 1, 2021</span></p>

// ![An overstuffed office filled with books and papers](https://images-suhay.sfo3.cdn.digitaloceanspaces.com/samet-kurtkus-HKFgPPPLdyI-unsplash.jpg)
// <figcaption>Photo by <a href="https://unsplash.com/@sametkurtkus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samet Kurtkus</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></figcaption>
