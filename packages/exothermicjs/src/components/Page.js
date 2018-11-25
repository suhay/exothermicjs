import React, { Component, Fragment } from 'react'

export default class Page extends Component {
  render() {
    const { data } = this.props
    if (data && data.page) {
      return (
        <Fragment>
          {data.page}
        </Fragment>
      );
    } else {
      return (
        <div>
          <p>Page not found!</p>
        </div>
      );
    }
  }
}