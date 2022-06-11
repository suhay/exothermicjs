import { useState, useEffect } from 'react'
import { useLoader, useConfig, Content } from '@exothermic/core'

import { showAbstract, showAuthor, showDate, showImage, showTags, showTitle } from './utils'

type Props = {
  title: string
  class?: string
  options?: any[]
}

export function BlogRoll({ title, class: classProps, options = [] }: Props) {
  const config = useConfig()
  const [manifestPath, setManifestPath] = useState<string>()
  const { data, status } = useLoader(manifestPath)
  const [pluginPath, setPluginPath] = useState<string>()
  const [manifest, setManifest] = useState<any>()
  const [dates, setDates] = useState<string[]>()

  useEffect(() => {
    if (config) {
      const plugin = config.plugins?.find((plug) => plug.resolve === '@exothermic/plugin-blog')
      setManifestPath(`${plugin?.options?.path}/_manifest.json`)
      setPluginPath(plugin?.options?.path)
    }
  }, [config])

  useEffect(() => {
    if (data) {
      const man = JSON.parse(data)
      setManifest(man)
      setDates(Object.keys(man))
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
            return showTitle(manifest[date].title, `/${pluginPath}/${manifest[date].filename}`)
          case 'abstract':
            return showAbstract(manifest[date].abstract, date)
          case 'author':
            return showAuthor(manifest[date].author, date)
          default:
            return null
        }
      })
    }

    return showTitle(manifest[date].title, `/${pluginPath}/${manifest[date].filename}`)
  }

  return (
    <section className={classProps ?? ''}>
      <Content content={title} />
      <ul>
        {dates
          ?.sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
          .map((date) => (
            <li key={manifest[date].filename}>
              {options.includes('image') && showImage(manifest[date].image, date)}
              <div className='article-meta'>{article(date)}</div>
            </li>
          ))}
      </ul>
    </section>
  )
}
