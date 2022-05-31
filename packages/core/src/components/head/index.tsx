import { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { metaTags } from './meta'
import { linkTags } from './link'
import { scriptTags } from './script'
import version from '../../version'
import { StateContext } from '../../contexts/store'
import { HeadFragment } from '../../types'

export function Head() {
  const {
    store: { baseTemplate: base, pageTemplate: page },
  } = useContext(StateContext)
  const [headData, setHeadData] = useState<HeadFragment>()
  const [meta, setMeta] = useState<JSX.Element[]>()
  const [description, setDescription] = useState<string>('New ExothermicJS page description')
  const [title, setTitle] = useState<string>('New ExothermicJS Page')
  const [links, setLinks] = useState<JSX.Element[]>()
  const [headScripts, setHeadScripts] = useState<JSX.Element[]>()

  useEffect(() => {
    if (page && base) {
      setHeadData({
        ...base,
        ...page,
      })
    }
  }, [base, page])

  useEffect(() => {
    if (headData != null) {
      setMeta(metaTags(headData.meta))
      setDescription(headData.description ?? '')
      setTitle(headData.title ?? '')
      setLinks(linkTags(headData.links))
      setHeadScripts(scriptTags(headData.headScripts))
    }
  }, [headData])

  if (!base || !headData) return null

  return (
    <Helmet>
      {meta}
      <meta name='description' content={description} />
      <meta name='generator' content={`ExothermicJS ${version}`} />
      <title>{title}</title>
      {links}
      {headScripts}
    </Helmet>
  )
}
