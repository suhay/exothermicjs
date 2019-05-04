import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import yaml from 'js-yaml'
import { BrowserRouter } from 'react-router-dom'
import { Subscribe } from 'statable'

import Spinner from './util/Spinner'
import Page from './Page'
import { Schema } from '../../'
import pageState from '../state/page'

export default class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: null,
      loading: true,
      path: props.path,
      config: props.config,
      page: null,
    }
  }
  
  componentDidMount() {
    pageState.setState({ route: this.state.path })
    if (this.state.config && this.state.config.dashboard) {
      import('../browser.config')
        .then(config => config.default())
        .then(config => {
          fetch(`/load/${this.state.path}`.replace('//', '/'), { credentials: `same-origin` })
            .then(response => response.text())
            .then(data => fetch('/load/module/' + config.dashboard))
            .then(dashboard => console.log(dashboard))
            .then(data => {
              const pageData = yaml.safeLoad(data, {
                schema: typeof config.dashboard.Schema === `function` ? dashboard.Schema() : Schema()
              })
              console.log(pageData)
              this.setState({
                data: pageData,
                loading: false,
                page: (
                  <dashboard.OffCanvas dump={this.props.dump} path={this.state.path}>
                    <Page data={pageData || this.state.data} />
                  </dashboard.OffCanvas>
                )
              })
            })
            .catch(error => {
              console.error(error)
              throw error 
            })
        })
        .catch(error => { throw error })
    }
    else {
      fetch(`/load/${this.state.path}`.replace('//', '/'), { credentials: `same-origin` })
        .then(response => response.text())
        .then(data => {
          const pageData = yaml.safeLoad(data, {
            schema: Schema()
          })
          this.setState({ 
            data: pageData,
            loading: false,
            page: (<Page data={pageData || this.state.data} />)
          })
        })
        .catch(error => { throw error })
    }
  }
  
  render() {
    return (
      <Subscribe to={[pageState]}>
        {state => (
          <div className='base loader'>
            {this.state.loading 
              ? <Spinner name='folding-cube' />
              : <BrowserRouter>
                  {this.state.page}
                </BrowserRouter>
             }
           </div>
         )}
      </Subscribe>
    )
  }
}