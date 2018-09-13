import React, { Component, Fragment } from 'react'
import yaml from 'js-yaml'
import { FoldingCube } from 'better-react-spinkit'

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
    const { children } = this.props;
    return (
      <Fragment>
        {this.state.loading 
          ? <FoldingCube />
          : <Page data={this.props.data}>
              {children}
            </Page>}
      </Fragment>
    )
  }
}