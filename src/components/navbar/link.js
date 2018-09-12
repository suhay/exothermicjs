import React, { Component } from 'react'
import { Link as DomLink } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import yaml from 'js-yaml'

import pageState from '../../state/page'
import { REACTY_SCHEMA } from 'Root/reacty.config'

export default class Link extends Component {
  constructor(props) {
    super(props)
    this.handleNav = this.handleNav.bind(this)
  }
  
  handleNav() {
    fetch(`/load/${this.props.to == '/' ? 'index' : this.props.to}`.replace('//', '/'))
      .then(response => response.text())
      .then(data => pageState.setState({ 
        data: yaml.safeLoad(data, {
          schema: REACTY_SCHEMA
        }),
        route: this.props.to
      }))
  }
  
  render() {
    return (
      <DomLink to={this.props.to} onClick={this.handleNav} {...this.props}>{this.props.children}</DomLink>
    )
  }
}