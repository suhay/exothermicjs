import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import { FoldingCube } from 'better-react-spinkit'
import yaml from 'js-yaml'
import { BrowserRouter } from 'react-router-dom'
import { Subscribe } from 'statable'

import Page from './Page'
import { REACTY_SCHEMA } from 'Root/reacty.config'
import pageState from '../state/page'

export default class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: null,
      loading: true,
      path: this.props.path
    }
  }
  
  componentDidMount() {
    pageState.setState({ route: this.props.path })
    fetch(`/load/${this.props.path}`.replace('//', '/'))
      .then(response => response.text())
      .then(data => this.setState({ 
        data: yaml.safeLoad(data, {
          schema: REACTY_SCHEMA
        }),
        loading: false 
      }))
  }
  
  render() {
    return (
      <Subscribe to={[pageState]}>
        {state => (
          <Fragment>
            {this.state.loading 
              ? (<FoldingCube />) 
              : (<BrowserRouter>
                   <Page data={state.data || this.state.data} />
                </BrowserRouter>)
             }
           </Fragment>
         )}
      </Subscribe>
    )
  }
}