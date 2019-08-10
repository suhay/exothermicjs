import React from 'react'
import { StaticRouter } from 'react-router'

import Page from './page'
import { pageState } from '../state'

const Base = ({ 
  children,
  data,
  pagesPath,
  context,
  route,
}) => {
  pageState.setState({ pagesPath })
  return (
    <div className="base">
      <StaticRouter location={route} context={context}>
        <Page data={data}>
          {children}
        </Page>
      </StaticRouter>
    </div>
  )
}

export default Base
