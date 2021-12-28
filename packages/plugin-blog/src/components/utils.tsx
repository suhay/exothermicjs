import { DateTime, Duration } from 'luxon'
import { Link } from '@exothermic/core'

import { BlogAuthor, BlogImage } from '../types'

export const readingTime = (content: string) => {
  const words = content.match(/\S+/g).length
  const ms = (words / 200) * 1000
  return Duration.fromMillis(ms)
}

export const showImage = (image: BlogImage, date: string) =>
  image ? (
    <img key={`${date}-image`} className='blog-image' src={image.src} alt={image.alt ?? ''} />
  ) : null

export const showTags = (tags: string[], date: string) =>
  tags?.length
    ? tags.map((tag) => (
        <span className='blog-tag' key={`${date}-${tag}`}>
          {tag}
        </span>
      ))
    : null

export const showDate = (date: string) =>
  date ? (
    <span className='blog-date' key={date}>
      {DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)}
    </span>
  ) : null

export const showTitle = (linkTitle: string, linkUrl?: string) =>
  linkTitle && linkUrl ? (
    <Link key={linkUrl} to={linkUrl}>
      {linkTitle}
    </Link>
  ) : (
    <h1 key='article-title'>{linkTitle}</h1>
  )

export const showAbstract = (abstract: string, date: string) =>
  abstract ? (
    <p key={`${date}-abstract`} className='blog-abstract'>
      {abstract}
    </p>
  ) : null

export const showAuthor = (author: BlogAuthor, date: string) =>
  author ? (
    <div key={`${date}-${author.name}`}>
      <span className='blog-author-image'>{author.image}</span>
      <span className='blog-author'>{author.name}</span>
      <span className='blog-author-subtitle'>{author.subtitle}</span>
    </div>
  ) : null
