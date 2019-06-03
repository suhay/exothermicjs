import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import fetch from 'isomorphic-fetch'
import yaml from 'js-yaml'
import URL from 'url-parse'

import { pageState, schemaState } from '../../state'

export default class Link extends Component {
  constructor(props) {
    super(props)
    this.state = {
      to: new URL(props.to),
    }
    this.handleNav = this.handleNav.bind(this)
  }

  handleNav() {
    const { to } = this.state

    if (to.pathname === ``) { return }

    const { Dashboard } = window ? window.EXOTHERMIC : { Dashboard: null }
    fetch(`/load${to.pathname === `/` ? `/index` : to.pathname}`)
      .then(response => response.text())
      .then(data => pageState.setState({
        data: yaml.safeLoad(data, {
          schema: Dashboard ? Dashboard.Schema() : schemaState.state.schema(),
        }),
        route: to.pathname,
      }))
  }

  render() {
    const { to } = this.state
    const { children } = this.props
    return (
      <Fragment>
        {to.hash === ``
          ? <NavLink activeClassName="selected" to={to.pathname} onClick={this.handleNav} {...this.props}>{children}</NavLink>
          : <NavHashLink smooth activeClassName="selected" to={to.href} onClick={this.handleNav} {...this.props}>{children}</NavHashLink>
        }
      </Fragment>
    )
  }
}
