import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import fetch from 'isomorphic-fetch'
import yaml from 'js-yaml'
import URL from 'url-parse'
import { DashboardSchema } from 'exothermicjs-dashboard-endo'

import pageState from '../../state/page'
import { Schema } from '../../../exothermic.config'

export default class Link extends Component {
  constructor(props) {
    super(props)
    this.state = {
      to: new URL(this.props.to)
    }
    this.handleNav = this.handleNav.bind(this)
  }
  
  handleNav() {
    if (this.state.to.pathname === '') { return }
    fetch(`/load${this.state.to.pathname == '/' ? '/index' : this.state.to.pathname}`)
      .then(response => response.text())
      .then(data => pageState.setState({ 
        data: yaml.safeLoad(data, {
          schema: window.DASHBOARD ? DashboardSchema : Schema
        }),
        route: this.state.to.pathname
      }))
  }
  
  render() {
    return (
      <Fragment>
        {this.state.to.hash === ''
          ? <NavLink activeClassName="selected" to={this.state.to.pathname} onClick={this.handleNav} {...this.props}>{this.props.children}</NavLink>
          : <NavHashLink smooth activeClassName="selected" to={this.state.to.href} onClick={this.handleNav} {...this.props}>{this.props.children}</NavHashLink>
        }
      </Fragment>
    )
  }
}