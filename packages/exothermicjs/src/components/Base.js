import React from 'react'

import Page from './page'

const Base = ({ children, data }) => (
  <div className="base">
    <Page data={data}>
      {children}
    </Page>
  </div>
)

export default Base
