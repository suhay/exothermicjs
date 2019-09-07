import React, { useEffect, useState } from 'react'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'
import fs from 'fs'
import { setGlobal, useGlobal } from 'reactn'

import Spinner from './spinner'
import schema from '../../schema'
import content from './content'

const Get = ({ path }) => {
  const [cache] = useGlobal(path)
  const [raw = {}, setRaw] = useGlobal(`raw`)
  const [pagesPath] = useGlobal(`pagesPath`)

  const initialData = cache || raw[path] || (fs && typeof fs.readFileSync === `function`
    ? (() => {
      const rawYaml = fs.readFileSync(`${pagesPath}/${path}.exo`, `utf8`)
      raw[path] = rawYaml
      setRaw({ ...raw })
      return yaml.safeLoad(rawYaml, { schema: schema() })
    })()
    : null)

  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let unmounted = false
    if (!cache) {
      setLoading(true)
      fetch(`/load/${path}`)
        .then(response => response.text())
        .then((text) => {
          const yamlData = text.startsWith(`---`) ? yaml.safeLoad(text, {
            schema: schema(),
          }) : null
  
          const newCache = {}
          newCache[path] = yamlData
          setGlobal(newCache)

          if (!unmounted) {
            setData(yamlData)
            setLoading(false)
          }
        })
    } else if (initialData) {
      const newCache = {}
      newCache[path] = initialData
      setGlobal(newCache)
    }
    return () => {
      unmounted = true
    }
  }, [path, cache, initialData])

  return (
    <div className={loading ? `get-loading` : `get-loaded`}>
      {!loading && (
        <>
          {data && content(data.content)}
          {data && data.items}
        </>
      )}
      {loading && <Spinner name="folding-cube" />}
    </div>
  )
}

export default Get
