import { ReactNode } from 'react'

export type BlogAuthor = {
  name: string
  image: string
  subtitle: string
}

export type BlogImage = {
  src: string
  alt?: string
  caption?: {
    credit?: string
    creditUrl?: string
    site?: string
    siteUrl?: string
  }
}

export type BlogArticle = {
  filename: string
  title: string
  abstract?: string
  tags?: string[]
  author: BlogAuthor
  image?: BlogImage
  content?: ReactNode
  date?: string
}

export type BlogManifest = {
  [key: string]: BlogArticle
}
