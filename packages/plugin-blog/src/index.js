import React, { useState, useEffect } from 'react'
import { useGlobal } from 'reactn'
import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import fetch from 'isomorphic-fetch'

import hydrate from '@exothermic/core/src/hydrate'
import { apply } from '@exothermic/core/src/schema'
import content from '@exothermic/core/src/components/util/content'

import BlogArticle from './article'

const Blog = ({ basePath = `` }) => {
  const [raw] = useGlobal(`raw`)
  const [pagesPath] = useGlobal(`pagesPath`)

  const [, setLoading] = useState(true)
  const [data, setData] = useState(raw && basePath ? raw[basePath] : null)

  const ssr = fs && typeof fs.readFileSync === `function`

  if (data === null && ssr) {
    const files = fs.readdirSync(`${pagesPath}/${basePath}`)
    const blogArticles = files
      .map((file) => fm(fs.readFileSync(`${pagesPath}/${basePath.split(`/`).concat(file).join(`/`)}`, `utf8`)))
      .reduce((list, article) => {
        list.push({
          content: article.body,
          ...article.attributes,
        })
        return list
      }, [])
      .sort((a, b) => a.postDate - b.postDate)

    const markup = hydrate(`_blog-list.exo`, { items: blogArticles }, [path.resolve(`./node_modules/@exothermic/plugin-blog/templates`)])
    setData(apply(markup))
  }

  useEffect(() => {
    fetch(`/load/_blog-list.exo`, {
      method: `POST`,
      body: JSON.stringify({}),
      headers: {
        'Content-Type': `application/json`,
      },
    })
      .then((response) => response.text())
      .then((text) => {
        setData(text)
        setLoading(false)
      })
  }, [data, setLoading])

  return (
    <ul>
      {data && data.map((dat, i) => <li key={i}>{content(dat)}</li>)}
    </ul>
  )
}

export default Blog

export const Type = (yaml) => [
  new yaml.Type(`!blog`, {
    kind: `scalar`,
    construct(data) {
      return (
        <Blog basePath={data} key={data} />
      )
    },
    instanceOf: Blog,
  }),
  new yaml.Type(`!blog-article`, {
    kind: `mapping`,
    construct({ basePath, slug }) {
      return (
        <BlogArticle basePath={basePath} slug={slug} key={slug} />
      )
    },
    instanceOf: BlogArticle,
  }),
]

export * from '../exothermic.config'
