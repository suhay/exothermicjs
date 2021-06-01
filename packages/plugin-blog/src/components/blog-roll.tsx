import {
  useLoader, useConfig, Link, Content, useState, useEffect,
} from '@exothermic/core'
import { DateTime } from 'luxon'

type Props = {
  title: string
  class?: string
  options?: any[]
}

export const BlogRoll = ({ title, class: classProps, options = [] }: Props) => {
  const config = useConfig()
  const [manifestPath, setManifestPath] = useState<string>()
  const { data, status } = useLoader(manifestPath)
  const [pluginPath, setPluginPath] = useState<string>()
  const [manifest, setManifest] = useState<any>()
  const [dates, setDates] = useState<string[]>()

  useEffect(() => {
    if (config) {
      const plugin = config.plugins.find((plug) => plug.resolve === '@exothermic/plugin-blog')
      setManifestPath(`${plugin.options.path}/_manifest.json`)
      setPluginPath(plugin.options.path)
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

  const showImage = (image, date) => (image ? <img key={`${date}-image`} className="blog-image" src={image.src} alt={image.alt ?? ''} /> : null)

  const showTags = (tags, date) => (tags?.length ? tags.map((tag) => <span className="blog-tag" key={`${date}-${tag}`}>{tag}</span>) : null)

  const showDate = (date) => (date ? <span className="blog-date" key={date}>{DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)}</span> : null)

  const showTitle = (linkTitle, linkUrl) => (linkTitle && linkUrl ? <Link key={linkUrl} to={linkUrl}>{linkTitle}</Link> : null)

  const showAbstract = (abstract, date) => (abstract ? <p key={`${date}-abstract`} className="blog-abstract">{abstract}</p> : null)

  const showAuthor = (author, date) => (author
    ? (
      <div key={`${date}-${author.name}`}>
        <span className="blog-author-image">{author.image}</span>
        <span className="blog-author">{author.name}</span>
        <span className="blog-author-subtitle">{author.subtitle}</span>
      </div>
    ) : null)

  const article = (date: string) => {
    if (options.length) {
      return options.map((option) => {
        const key = typeof option === 'string' ? option : '';

        switch (key) {
          case 'image':
            return showImage(manifest[date].image, date)
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
        {dates.sort((a, b) => parseInt(b, 10) - parseInt(a, 10)).map((date) => (
          <li key={manifest[date].filename}>
            {article(date)}
          </li>
        ))}
      </ul>
    </section>
  )
}
