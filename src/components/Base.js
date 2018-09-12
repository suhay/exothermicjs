import React, { Component } from 'react'
import yaml from 'js-yaml'

import Page from 'Components/Page'

export default class Base extends Component {
  render() {
    const { children } = this.props;
    return (
      <Page data={this.props.data}>
        {children}
      </Page>
    );
  }
}