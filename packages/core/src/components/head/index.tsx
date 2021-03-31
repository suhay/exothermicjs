import { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { metaTags } from './meta'
import { linkTags } from './link'
import { scriptTags } from './script'
import version from '../../version'
import { state } from '../../contexts/store'
import { HeadFragment } from '../../types'

export const Head = () => {
  const { store: { baseTemplate: base, pageTemplate: page } } = useContext(state)
  const [headData, setHeadData] = useState<HeadFragment>()

  useEffect(() => {
    setHeadData({
      ...base,
      ...page,
    })
  }, [base, page])

  if (!base || !headData) return <></>

  const {
    meta, description, title, links, headScripts,
  } = headData

  return (
    <Helmet>
      {metaTags(meta)}
      <meta name="description" content={description} />
      <meta name="generator" content={`ExothermicJS ${version}`} />
      <title>{title}</title>
      {linkTags(links)}
      {scriptTags(headScripts)}
    </Helmet>
  )
}
