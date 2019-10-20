import React, { useState } from 'react'
import { useGlobal } from 'reactn'
import fs from 'fs'
import path from 'path'
import fm from 'front-matter'

import hydrate from '@exothermic/core/src/hydrate'
import { apply } from '@exothermic/core/src/schema'
import content from '@exothermic/core/src/components/util/content'

const Blog = ({ basePath = ``, slug = null }) => {
  const [raw] = useGlobal(`raw`)
  const [pagesPath] = useGlobal(`pagesPath`)

  // const [loading, setLoading] = useState(true)
  const [data, setData] = useState(raw && slug ? raw[slug] : null)

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

    // fetch(`http://localhost:${process.env.PORT}/load/blog-list.exo`, {
    //   method: 'POST',
    //   body: JSON.stringify(blogArticles),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    //   .then((response) => response.text())
    //   .then((text) => {
    //     setData(text)
    //     setLoading(false)
    //   })
  }

  // useEffect(() => {
  //   let unmounted = false
  //   if (!data && loading) {
  //     fetch(`/load/pages/markdown/${path}.md`)
  //       .then((response) => response.text())
  //       .then((text) => {
  //         if (!unmounted) {
  //           setData(text)
  //           setLoading(false)
  //         }
  //       })
  //   }
  //   return () => {
  //     unmounted = true      
  //   }
  // }, [data, loading])

  if (!slug) {
    return (
      <ul>
        {data && data.map((dat, i) => <li key={i}>{content(dat)}</li>)}
      </ul>
    )
  } // Load the slug
  return (
    <div>Single post</div>
  )
}

export default Blog

export const Type = (yaml) => new yaml.Type(`!blog`, {
  kind: `scalar`,
  construct(data) {
    if (typeof data === `string`) {
      return (
        <Blog basePath={data} key={data} />
      )
    } if (Object.keys(data).length > 0) {
      return (
        <Blog {...data} key={data.slug} />
      )
    }
    return <></>
  },
  instanceOf: Blog,
})

export * from '../exothermic.config'
