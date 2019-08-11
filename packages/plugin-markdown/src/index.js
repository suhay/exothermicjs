import React, { Fragment, useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import fetch from 'isomorphic-fetch'
import fs from 'fs'
import { setGlobal, useGlobal } from 'reactn'

// import Editor from './editor'

const Markdown = ({ path }) => {
  const [cache] = useGlobal(path)
  const [raw, setRaw] = useGlobal(`raw`)
  const [pagesPath] = useGlobal(`pagesPath`)
  const initialData = cache || (fs && typeof fs.readFileSync === `function`
    ? (() => {
      const rawMd = fs.readFileSync(`${pagesPath}markdown/${path}.md`, `utf8`)
      raw[path] = rawMd
      setRaw({ ...raw })
      return rawMd
    })()
    : null)

  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)

  if (initialData && !cache) {
    const newCache = {}
    newCache[path] = initialData
    setGlobal(newCache)
  }

  useEffect(() => {
    let unmounted = false
    if (!cache) {
      setLoading(true)
      fetch(`/load/pages/markdown/${path}.md`)
        .then(response => response.text())
        .then((text) => {
          const newCache = {}
          newCache[path] = text
          setGlobal(newCache)

          if (!unmounted) {
            setData(text)
            setLoading(false)
          }
        })
    }
    return () => {
      unmounted = true      
    }
  }, [path, cache])

  return (
    <Fragment>
      {loading && <p>Loading...</p>}
      <ReactMarkdown source={data} escapeHtml={false} renderers={{ root: Fragment }} />
      {/* {editing && !loading && <Editor id={id} value={data} editingThis={editingThis === id} />} */}
    </Fragment>
  )
}

export default Markdown

export const Type = yaml => new yaml.Type(`!markdown`, {
  kind: `scalar`,
  resolve(path) {
    return path !== null
  },
  construct(path = `/`) {
    return (
      <Markdown path={path} key={path} />
    )
  },
  instanceOf: Markdown,
  represent(props) {
    const rtn = {
      tag: `!markdown ${props.path}`,
    }
    return rtn
  },
})

export { dev, live } from '../exothermic.config.json'
