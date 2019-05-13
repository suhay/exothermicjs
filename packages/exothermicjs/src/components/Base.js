import React, { PureComponent } from 'react'

import Page from './page'

export default class Base extends PureComponent {
  render() {
    const { children, data } = this.props
    return (
      <div className="base">
        <Page data={data}>
          {children}
        </Page>
      </div>
    )
  }
}
