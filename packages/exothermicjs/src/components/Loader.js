import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import yaml from 'js-yaml'
import { BrowserRouter } from 'react-router-dom'
import { Subscribe } from 'statable'

import Spinner from './util/Spinner'
import Page from './Page'
import { Schema } from 'Root/exothermic.config'
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
    fetch(`/load/${this.props.path}`.replace('//', '/'), { credentials: `same-origin` })
      .then(response => response.text())
      .then(data => this.setState({ 
        data: yaml.safeLoad(data, {
          schema: Schema
        }),
        loading: false 
      }))
      .catch(error => { throw error})
  }
  
  render() {
    return (
      <Subscribe to={[pageState]}>
        {state => (
          <Fragment>
            {this.state.loading 
              ? <Spinner name='folding-cube' />
              : <BrowserRouter>
                   <Page data={state.data || this.state.data} />
                </BrowserRouter>
             }
           </Fragment>
         )}
      </Subscribe>
    )
  }
}