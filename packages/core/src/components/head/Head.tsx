import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { useBaseTemplate } from '~/hooks/useBaseTemplate'
import { usePageTemplate } from '~/hooks/usePageTemplate'
import version from '~/version'
import { HeadFragmentType } from '../../types'
import { linkTags } from './LinkTag'
import { metaTags } from './Meta'
import { scriptTags } from './Script'

export function Head() {
  const base = useBaseTemplate((state) => state.baseTemplate)
  const page = usePageTemplate((state) => state.pageTemplate)
  const [headData, setHeadData] = useState<HeadFragmentType>()
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
