import React, { Fragment, useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import fetch from 'isomorphic-fetch'
import fs from 'fs'
import * as localForage from 'localforage'
import { useGlobal } from 'reactn'

// import Editor from './editor'
const Markdown = ({ path }) => {
  const [raw, setRaw] = useGlobal(`raw`)
  const [pagesPath] = useGlobal(`pagesPath`)

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(raw ? raw[path] : null)
  const [checkLocalCache, setCheckLocalCache] = useState(true)

  const ssr = fs && typeof fs.readFileSync === `function`

  if (!data && !loading) {
    if (ssr) {
      const initialData = fs.readFileSync(`${pagesPath}markdown/${path}.md`, `utf8`)
      raw[path] = initialData
      setRaw({ ...raw })
      setData(initialData)
    } else if (checkLocalCache) {
      setLoading(true)
      localForage
        .getItem(path)
        .then((value) => {
          if (!value) {
            setCheckLocalCache(false)
          } else {
            setData(value)
            setLoading(false)
          }
        })
        .catch((err) => {
          console.error(err)
          setLoading(false)        
        })
    }
  }

  useEffect(() => {
    let unmounted = false
    if (!data && loading && !checkLocalCache) {
      fetch(`/load/pages/markdown/${path}.md`)
        .then(response => response.text())
        .then((text) => {
          localForage.setItem(path, text)
          if (!unmounted) {
            setData(text)
            setLoading(false)
          }
        })
    }
    return () => {
      unmounted = true      
    }
  }, [path, data, loading, checkLocalCache])

  return (
    <Fragment>
      {loading && <p>Loading...</p>}
      {!loading && <ReactMarkdown source={data} escapeHtml={false} renderers={{ root: Fragment }} />}
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
