import React, { Fragment, PureComponent } from 'react'

export default class Page extends PureComponent {
  render() {
    const { data } = this.props
    if (data && data.page) {
      return (
        <Fragment>
          {data.page}
        </Fragment>
      )
    }
    return (
      <div>
        <p>Page not found!</p>
      </div>
    )
  }
}
