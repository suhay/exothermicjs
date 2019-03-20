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
      path: this.props.path
    }
  }
  
  componentDidMount() {
    pageState.setState({ route: this.state.path })
    let Dashboard = null
    try { Dashboard = require('../dashboard') } catch (e) {}
    fetch(`/load/${this.state.path}`.replace('//', '/'), { credentials: `same-origin` })
      .then(response => response.text())
      .then(data => this.setState({ 
        data: yaml.safeLoad(data, {
          schema: window.DASHBOARD && Dashboard ? Dashboard.Schema() : Schema()
        }),
        loading: false 
      }))
      .catch(error => { throw error})
  }
  
  render() {
    let Dashboard = null
    try { Dashboard = require('../dashboard') } catch (e) {}
    return (
      <Subscribe to={[pageState]}>
        {state => (
          <div className='base'>
            {this.state.loading 
              ? <Spinner name='folding-cube' />
              : window && window.DASHBOARD && Dashboard
                ? <BrowserRouter>
                    <Dashboard.OffCanvas dump={this.props.dump} path={this.state.path}>
                      <Page data={state.data || this.state.data} />
                    </Dashboard.OffCanvas>
                  </BrowserRouter>
                : <BrowserRouter>
                    <Page data={state.data || this.state.data} />
                  </BrowserRouter>
             }
           </div>
         )}
      </Subscribe>
    )
  }
}