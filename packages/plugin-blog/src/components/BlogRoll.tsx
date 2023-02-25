import { useState, useEffect, useCallback, ReactElement } from 'react'

import { useLoader, useConfig, Content, Loading } from '@exothermic/core'

import { showAbstract, showAuthor, showDate, showImage, showTags, showTitle } from './utils'
import { BlogManifest } from '../types'

function BlogOptions({
  options,
  date: articleDate,
  manifest,
  pluginPath,
}: {
  options: string[]
  date: string
  pluginPath?: string
  manifest: BlogManifest
}) {
  const article = useCallback(
    (date: string) => {
      if (options.length) {
        return options.map((option) => {
          const key = typeof option === 'string' ? option : ''

          switch (key) {
            case 'tags':
              return showTags(manifest[date].tags, date)
            case 'date':
              return showDate(date)
            case 'title':
              return showTitle(
                manifest[date].title,
                `/${pluginPath ? `${pluginPath}/` : ''}${manifest[date].filename}`,
              )
            case 'abstract':
              return showAbstract(manifest[date].abstract, date)
            case 'author':
              return showAuthor(manifest[date].author, date)
            default:
              return null
          }
        })
      }

      return showTitle(
        manifest[date].title,
        `/${pluginPath ? `${pluginPath}/` : ''}${manifest[date].filename}`,
      )
    },
    [manifest, options, pluginPath],
  )

  return (
    <>
      {options.includes('image') && showImage(manifest[articleDate].image, articleDate)}
      <div className='article-meta'>{article(articleDate)}</div>
    </>
  )
}

export type Props = {
  title: string
  class?: string
  options?: string[]
  items?: ReactElement[]
}

export function BlogRoll({ title, class: classProps, options = [], items = [] }: Props) {
  const config = useConfig()
  const [manifestPath, setManifestPath] = useState<string>()
  const { data, status } = useLoader(manifestPath)
  const [pluginPath, setPluginPath] = useState<string>()
  const [manifest, setManifest] = useState<BlogManifest>({})
  const [dates, setDates] = useState<string[]>()

  useEffect(() => {
    if (config) {
      const plugin = config.plugins?.find((plug) => plug.resolve === '@exothermic/plugin-blog')
      setManifestPath(`${plugin?.options?.path ?? ''}/_manifest.json`)
      setPluginPath(plugin?.options?.path)
    }
  }, [config])

  useEffect(() => {
    if (data) {
      const man = JSON.parse(data) as BlogManifest
      setManifest(man)
      setDates(Object.keys(man))
    }
  }, [data])

  if (status === 'LOADING') {
    return <Loading />
  }

  return (
    <section className={classProps ?? ''}>
      <Content content={title} />
      <ul>
        {dates
          ?.sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
          .map((date) => (
            <li key={manifest[date].filename}>
              {items?.map((item, i) => (
                <item.type
                  {...item.props}
                  data={{ ...manifest[date], date }}
                  key={`${item.type.toString()}-${i}`}
                />
              ))}
              <BlogOptions
                options={options}
                date={date}
                manifest={manifest}
                pluginPath={pluginPath}
              />
            </li>
          ))}
      </ul>
    </section>
  )
}
