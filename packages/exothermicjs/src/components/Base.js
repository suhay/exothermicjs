import React, { Component, Fragment } from 'react'
import yaml from 'js-yaml'

import Spinner from './util/Spinner'
import Page from 'Components/Page'

export default class Base extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      loading: true,
    }
  }
  
  componentDidMount() {
    this.setState({ loading: false })
  }
  
  render() {
    const { children, browser, data } = this.props;
    return (
      <Fragment>
        {browser && this.state.loading 
          ? <Spinner name='folding-cube' />
          : <Page data={data}>
              {children}
            </Page>}
      </Fragment>
    )
  }
}