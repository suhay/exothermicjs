import React from 'react'
import { setGlobal } from 'reactn'

import Page from './page'

const Base = ({ 
  children,
  data,
  pagesPath,
}) => {
  setGlobal({ pagesPath, raw: {}, cache: {} })
  return (
    <div className="base">
      <Page data={data}>
        {children}
      </Page>
    </div>
  )
}

export default Base
