import React, { Component, Fragment } from 'react'
import yaml from 'Components/util/js-yaml'

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
    const { children, force } = this.props;
    return (
      <Fragment>
        {!force && this.state.loading 
          ? <Spinner name='folding-cube' />
          : <Page data={this.props.data}>
              {children}
            </Page>}
      </Fragment>
    )
  }
}