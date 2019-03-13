import React, { Component, Fragment } from 'react'

import Page from './Page'

export default class Base extends Component {
  render() {
    const { children, browser, data } = this.props;
    return (
      <div className='base'>
        <Page data={data}>
          {children}
        </Page>
      </div>
    )
  }
}