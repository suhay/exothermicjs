import React from 'react'

import Meta from './meta'
import HeadLink from './link'
import Script from './script'
import { version } from '../../'

const Head = ({ data }) => {
  const description = [{ description: data.description }]
  return (
    <>
      <Meta tags={data.meta} />
      <meta name="generator" content={`ExothermicJS ${version}`} />
      <title>{data.title}</title>
      <Meta tags={description} />
      <HeadLink links={data.links} />
      <Script scripts={data.headScripts} />
    </>
  )
}

export default Head
