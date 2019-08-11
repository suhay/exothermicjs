import React from 'react'
import { StaticRouter } from 'react-router'
import { setGlobal } from 'reactn'

import Page from './page'

const Base = ({ 
  children,
  data,
  pagesPath,
  route,
}) => {
  setGlobal({ pagesPath, raw: {}, cache: {} })
  return (
    <div className="base">
      <StaticRouter location={route} context={{}}>
        <Page data={data}>
          {children}
        </Page>
      </StaticRouter>
    </div>
  )
}

export default Base
